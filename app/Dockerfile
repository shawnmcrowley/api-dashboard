# Use official Node.js
FROM node:latest
# Set Working Directory
WORKDIR /app
# Copy package.json and Install Dependencies
COPY package.json .
RUN npm install
# Copy Application Code
COPY . .
# Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]