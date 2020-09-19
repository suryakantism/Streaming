FROM nginx:latest

WORKDIR /app

COPY ./nginx.conf /usr/share/nginx/conf/

RUN chmod +r /usr/share/nginx/conf/nginx.conf
CMD ["nginx", "-g","daemon off;"]