FROM node:14.17-alpine AS BUILDER

RUN mkdir /build && chown -R node:node /build

WORKDIR /build

RUN apk add --no-cache --virtual .gyp python make g++ libtool autoconf automake

USER node

COPY --chown=node:node svelte.config.js tailwind.config.cjs postcss.config.cjs package.json package-lock.json ./

RUN npm ci 

COPY --chown=node:node src ./src
COPY --chown=node:node static ./static

RUN npm run build

FROM node:14.17-alpine

ENV NODE_ENV production
ENV PORT 3000

WORKDIR /app

RUN apk add --no-cache tini

USER node

COPY --from=builder --chown=node:node /build/package*.json /build/svelte.config.js ./
COPY --from=builder --chown=node:node /build/node_modules ./node_modules
COPY --from=builder --chown=node:node /build/src/app.html ./src/app.html
COPY --from=builder --chown=node:node /build/dist ./dist
COPY --from=builder --chown=node:node /build/.svelte-kit ./.svelte-kit

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "/app/dist", "--max-old-space-size=400"]