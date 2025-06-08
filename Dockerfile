# NOTE: this dockerfile assumes that both the server and client have already been built

FROM node:20-slim

WORKDIR /app

# copying minimum files to install dependencies
COPY package.json package-lock.json ./
COPY server/package.json server/pnpm-lock.yaml ./server/

RUN corepack enable && pnpm install --filter ./server... --prod

# copying compiled server build
COPY server/dist ./server/dist
# copying compiled client build
COPY client/dist ./client/dist

EXPOSE 8080

# start the server
CMD ["pnpm", "server:start:prod"]
