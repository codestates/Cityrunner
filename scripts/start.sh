#!/bin/bash
cd /home/ubuntu/Cityrunner/server
authbind --deep pm2 start app.js
