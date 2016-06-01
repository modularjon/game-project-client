
curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data "{
  }"

# data output from curl doesn't have a trailing newline
echo
