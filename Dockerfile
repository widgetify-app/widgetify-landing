# Builder Stage
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

# Build the Next.js application
RUN bun run build

# Runner Stage
FROM oven/bun:latest AS runner

WORKDIR /app

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock

# Install only production dependencies
RUN bun install --production

EXPOSE 3000

ENV NODE_ENV=production

CMD ["bun", "run", "start"]