
FROM node:20.12.1

WORKDIR /user/app

COPY . .
RUN npm run build
RUN npm install --production 

CMD ["npm", "start"]

