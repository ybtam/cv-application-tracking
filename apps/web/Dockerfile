FROM oven/bun:latest AS base
RUN bun install --global turbo
WORKDIR /app

FROM base AS installer
COPY . .
RUN bun install

# Build the project and its dependencies
COPY turbo.json turbo.json
RUN bun turbo run build --filter=web

FROM base AS runner
COPY --from=installer /app .
