#!/bin/bash
 
set -e
 
ganache-cli --gasLimit 6721975 2> /dev/null 1> /dev/null &
sleep 5 # ensure ganache-cli is up
rm -rf build
truffle compile
truffle migrate --reset --network development
truffle test
kill -9 $(lsof -t -i:8545)