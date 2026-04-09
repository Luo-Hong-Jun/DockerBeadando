FROM node:24 AS build

WORKDIR /home/node/app
COPY ./app .
RUN npm i
RUN npm run build

FROM nginx AS final
COPY --from=build /home/node/app/dist/20250930_McDonalds/browser /usr/share/nginx/html
