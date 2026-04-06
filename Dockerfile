# --- Stage 1: Build Stage ---
FROM node:22-alpine AS builder
WORKDIR /app
# Copy only dependency files first to leverage Docker cache
COPY package*.json ./
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

RUN npm ci --only=production

# Change ownership to non-root user
RUN chown -R nodejs:nodejs /app
# Switch to non-root user
USER nodejs

EXPOSE 3000

CMD [ "node", "dist/server.js" ]