#this file creates an docker image from this project

# container image
FROM  node

# Create app directory at container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# run this comand at container environment
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# copy everythin from here ./ to /usr/src/app/
COPY . .

# witch port the container will listen to?
EXPOSE 3333

#if nodemon does not work use node.
CMD [ "nodemon", "src/server.js" ]

