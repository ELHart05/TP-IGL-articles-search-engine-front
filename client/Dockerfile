FROM node:18-alpine

WORKDIR /app/client

COPY package.json .

RUN npm install

COPY . .

ENV VITE_ENVIRONMENT=development

EXPOSE 3000

CMD ["npm", "run", "dev"]