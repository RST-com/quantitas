FROM node:14-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV PORT 8080

COPY ./package.json /app/
COPY ./yarn.lock /app/
RUN yarn --silent
COPY . /app
RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]