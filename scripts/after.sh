#!/bin/bash
export PATH="/home/ec2-user/.nvm/versions/node/v16.13.0/bin/:$PATH"
cd /home/ec2-user/api
if [ "$DEPLOYMENT_GROUP_NAME" == "group-dev-cheatcode-websocket" ]; then
###Copying env file####
NODE_ENV=development node getEnvs.js && NODE_ENV=development node_modules/.bin/sequelize db:migrate
pm2 start development.json

elif [ "$DEPLOYMENT_GROUP_NAME" == "group-demo-cheatcode-websocket" ]; then
###Copying env file####
NODE_ENV=demo node getEnvs.js && NODE_ENV=demo node_modules/.bin/sequelize db:migrate
pm2 start demo.json

elif [ "$DEPLOYMENT_GROUP_NAME" == "group-prod-cheatcode-websocket" ]; then
###Copying env file####
cd /home/ec2-user/api
NODE_ENV=prod node getEnvs.js && NODE_ENV=demo node_modules/.bin/sequelize db:migrate
pm2 start production.json

else
echo "Deployment failed"
fi
