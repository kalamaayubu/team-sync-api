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
WORKDIR /app
# Copy only the compiled code from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
# Install ONLY production dependencies (no dev-tools, no compilers)
RUN npm ci --only=production
# Expose the internal port
EXPOSE 3000
# Run the compiled JavaScript entry point
CMD [ "node", "dist/server.js" ]