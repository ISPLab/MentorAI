rm -r assets/
cp index.html index.html.copy
cp dist/index.html index.html
cp -r dist/assets .
npm run deploy
# rm index.html
# mv index.html.copy index.html
