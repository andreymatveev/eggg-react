FROM node:12 as builder

WORKDIR /usr/src/eggg
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.15.2
COPY config/nginx/default.conf etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/eggg/build /usr/share/nginx/html
EXPOSE 4200 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
