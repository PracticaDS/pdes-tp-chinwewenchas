FROM node:11-alpine as builder
ADD ./ /app
WORKDIR /app
RUN yarn install
RUN yarn build

FROM nginx:1.17-alpine
COPY --from=builder /app/build/ /var/www
COPY docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
