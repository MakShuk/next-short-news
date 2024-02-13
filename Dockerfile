FROM node:20
WORKDIR /opt/app/
ADD *.json ./
RUN npm install
ADD . .
RUN npm run build

CMD ["npx", "next", "start"]


#docker run --name test -d -p 3000:3000 test-1