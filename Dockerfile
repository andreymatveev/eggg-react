FROM node:12 as builder

WORKDIR /usr/src/eggg
COPY package.json ./

RUN mkdir -p node_modules/node-sass/vendor/linux-x64-51
RUN curl -L https://github.com/sass/node-sass/releases/download/v4.9.4/linux-x64-51_binding.node -o node_modules/node-sass/vendor/linux-x64-51/binding.node

RUN npm install
RUN npm rebuild node-sass

COPY . .
RUN npm run build

FROM nginx:1.15.2
COPY config/nginx/default.conf etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/eggg/build /usr/share/nginx/html
EXPOSE 4200 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
