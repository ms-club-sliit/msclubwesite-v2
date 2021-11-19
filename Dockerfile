FROM node:14.18-alpine AS BUILD_IMAGE 
COPY package.json package-lock.json yarn.lock ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm install && mkdir /ms-website && cp -R ./node_modules ./ms-website
WORKDIR /ms-website
COPY . .
RUN yarn build 

FROM node:14.18-alpine
COPY --from=BUILD_IMAGE /ms-website/build ./build
COPY --from=BUILD_IMAGE /ms-website/node_modules ./node_modules
EXPOSE 9090
ENTRYPOINT [ "yarn" ] 
CMD [ "start" ]