#!/bin/bash
 
ganache-cli --gasLimit 6721975 &> /dev/null &
sleep 5 # ensure ganache-cli is up

yarn coverage && cat coverage/lcov.info | coveralls

kill -9 $(lsof -t -i:8545)
