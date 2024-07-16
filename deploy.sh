rm -r assets/
cp index.html index.html.copy
cd ./app/
npm run deploy
cd ../
rm index.html
mv index.html.copy index.html
git add .
echo "commit..."
git commit -m "deploy"

echo "push..."
git push origin main


