FROM node:18-alpine

WORKDIR /app/admin

COPY package.json .

RUN npm install

COPY . .

ENV VITE_ENVIRONMENT=development

EXPOSE 3001

CMD ["npm", "run", "dev"]