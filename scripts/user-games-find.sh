
curl "http://tic-tac-toe.wdibos.com/games/$ID" \
 --include \
 --request GET \
 --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
