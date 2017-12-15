FROM nginx:1.13
MAINTAINER "moalmeida" <moalmeida@koinosystems.com>

COPY global /etc/nginx/global/
COPY conf.d /etc/nginx/conf.d/
COPY entrypoint.sh /entrypoint.sh

RUN mkdir /usr/share/nginx/cache

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
