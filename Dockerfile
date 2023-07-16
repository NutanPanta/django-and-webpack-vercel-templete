# javascript runtime
FROM node:17-alpine AS builder

# Add a work directory
WORKDIR /opt/template

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

ENV NODE_ENV production

# Copy app files
COPY . .

# Build the app
RUN npm run build

FROM python:3.8-buster

RUN mkdir -p /var/log/template

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

CMD /bin/sh -c ./start.sh
