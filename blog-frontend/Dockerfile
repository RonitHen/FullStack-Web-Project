FROM node:20 as builder

COPY . /my-blog-ui

WORKDIR /my-blog-ui

RUN npm ci
RUN npm run build

# Instead of this:
# RUN npm install -g serve
# CMD serve -s build

# We use this:
FROM nginx
COPY --from=builder /my-blog-ui/build /usr/share/nginx/html

# And run this in terminal:
# docker build . -t tag
# docker run -it --rm -p 3800:80 tag