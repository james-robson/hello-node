FROM node:4.4.7
EXPOSE 9090
COPY server.js .
CMD node server.js
