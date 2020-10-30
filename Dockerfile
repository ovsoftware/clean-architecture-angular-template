### BUILD ###

FROM node:13.10-alpine as builder

RUN apk add --update-cache \
    python3 \
    make \
    g++ \
    && rm -rf /var/cache/apk/*

# Build App

COPY ./template/package.json ./template/package-lock.json /my-app/

WORKDIR /my-app

RUN npm ci

COPY ./template/ .

RUN npm run ng test --no-watch \
    && npm run ng build -- --prod --output-path=dist


### RUN ###

FROM nginx:1.17.9-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.conf /etc/nginx/
COPY ./nginx/server.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /my-app/dist/ /var/www/my-app

CMD ["nginx", "-g", "daemon off;"]
