FROM 590489752725.dkr.ecr.us-east-1.amazonaws.com/ops:node-16.13.0-slim
# set working directory
WORKDIR /usr/src/app

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./

RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Bundle app source
COPY . .

# start app
CMD ["npm", "run", "start:dev"]
