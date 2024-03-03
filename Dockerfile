FROM node:18 as storybook-1-build
    
COPY storybook-1 /app

WORKDIR /app

RUN npm install

RUN npm run build-storybook


FROM node:18 as storybook-2-build

COPY storybook-2/ /app

WORKDIR /app

RUN npm install

RUN npm run build-storybook

FROM caddy:latest

FROM node:18 as storybook-3-build

COPY storybook-3/ /app

WORKDIR /app

RUN npm install

RUN npm run build-storybook

FROM caddy:latest

FROM node:18 as storybook-4-build

COPY storybook-4/ /app

WORKDIR /app

RUN npm install

RUN npm run build-storybook

FROM caddy:latest

COPY --from=storybook-1-build /app/storybook-static /app/main-storybook/
COPY --from=storybook-2-build /app/storybook-static /app/other-storybook/
COPY --from=storybook-3-build /app/storybook-static /app/other-storybook-2/
COPY --from=storybook-4-build /app/storybook-static /app/other-storybook-3/
COPY Caddyfile /app
WORKDIR /app
EXPOSE 3003

ENTRYPOINT [ "caddy", "run"]