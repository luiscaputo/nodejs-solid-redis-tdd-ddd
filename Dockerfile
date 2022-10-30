FROM node:16

WORKDIR /nodeJs_solid_redis_tdd_ddd

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3022


CMD ["npm", "run", "dev"]