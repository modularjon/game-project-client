#!/bin/bash

#curl "http://localhost:3000/sign-up" \
# curl "http://httpbin.org/post" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --data ""

curl "http://tic-tac-toe.wdibos.com/sign-up" \
 --include \
 --request POST \
 --header "Content-Type: application/json" \
 --data "{
   \"credentials\": {
     \"email\": \"$EMAIL\",
     \"password\": \"$PASSWORD\",
     \"password_confirmation\": \"$PASSWORD\"
   }
 }"

# data output from curl doesn't have a trailing newline
echo
