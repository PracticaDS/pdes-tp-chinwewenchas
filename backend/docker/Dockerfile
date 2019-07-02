FROM node:11-alpine as builder
ADD ./ /app
WORKDIR /app
RUN yarn install --production

FROM node:11-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3001
CMD [ "yarn", "serve" ]