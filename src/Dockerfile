# Step 1: Build app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.* ./

RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve app with nginx
FROM nginx:stable-alpine

# Copy build output to nginx's html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
