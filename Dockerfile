# --- Stage 1: Build Stage ---
FROM node:22-alpine AS builder
WORKDIR /app

# Copy dependency file and prisma schema before installation
COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci
# Copy everything and compile TypeScript to JavaScript
COPY . .
RUN npm run build

# --- Stage 2: Production Stage ---
FROM node:22-alpine

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

WORKDIR /app

# Copy the compiled code from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

# Install only production dependencies
RUN npm ci --only=production --ignore-scripts

# Change ownership to non-root user
RUN chown -R nodejs:nodejs /app
# Switch to non-root user
USER nodejs

EXPOSE 3000

CMD [ "node", "dist/server.js" ]