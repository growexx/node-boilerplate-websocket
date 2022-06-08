#!/bin/bash

export  PATH="/home/ec2-user/.nvm/versions/node/v16.13.0/bin/:$PATH"


pm2 stop all || true
