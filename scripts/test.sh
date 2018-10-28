#!/bin/bash
 
ganache-cli --gasLimit 6721975 &> /dev/null &
sleep 5 # ensure ganache-cli is up

yarn coverage

kill -9 $(lsof -t -i:8545)
