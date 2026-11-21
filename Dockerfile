FROM node:24-alpine AS base
WORKDIR /app

FROM base AS dependencies
RUN npm install --global pnpm@11.0.8
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

FROM dependencies AS production-dependencies-env
RUN pnpm install --frozen-lockfile --prod

FROM dependencies AS build-env
RUN pnpm install --frozen-lockfile
COPY . ./
RUN pnpm run build

FROM base
COPY package.json ./
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
COPY --from=build-env /app/app/assets/fonts /app/app/assets/fonts
CMD ["npm", "run", "start"]
