FROM node:14.18-alpine AS BUILD_IMAGE 
RUN apk add --no-cache nodejs npm
WORKDIR /ms-website
COPY ["yarn.lock", "package.json", "./"]
RUN yarn install --check-files --non-interactive --ignore-optional --frozen-lockfile
COPY . .
RUN yarn build 

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /ms-website /app/
EXPOSE 9090
ENTRYPOINT [ "yarn" ] 
CMD [ "start" ]