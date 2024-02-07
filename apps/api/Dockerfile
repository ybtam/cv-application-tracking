FROM oven/bun:latest AS base
RUN bun install --global turbo
WORKDIR /app

FROM base AS installer
COPY . .
RUN bun install

FROM base AS runner
COPY --from=installer /app .
