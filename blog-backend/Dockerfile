FROM node:20

COPY . /my-blog-backend

WORKDIR /my-blog-backend

RUN npm ci
RUN npm run build

CMD node dist/index.js