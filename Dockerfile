FROM node:18-alpine

WORKDIR /app/admin

# Copy admin app files
COPY admin/package*.json ./
RUN npm install
COPY admin/ .

ENV VITE_ENVIRONMENT=development

EXPOSE 3001

# run admin app
CMD ["npm", "run", "dev"]

WORKDIR /app/client

# Copy client app files
COPY client/package*.json ./
RUN npm install
COPY client/ .

ENV VITE_ENVIRONMENT=development

EXPOSE 3000

# run client app
CMD ["npm", "run", "dev"]
