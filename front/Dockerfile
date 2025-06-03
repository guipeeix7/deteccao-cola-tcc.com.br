# stage1 as builder
FROM node:18-alpine as builder

# copy the package.json to install dependencies
# COPY package.json package-lock.json ./
COPY ./dist /usr/share/nginx/html/

WORKDIR /dist
# RUN npm cache clean --force

# RUN npm install

# Install the dependencies and make the folder
# RUN mkdir /app-ui && mv ./node_modules ./app-ui

# RUN mkdir /vna-front && mv ./node_modules ./vna-front
# RUN npm install --legacy-peer-deps
# RUN npm audit fix --force
# WORKDIR /vna-front


# # Build the project and copy the files
# RUN ng build
EXPOSE 4202
