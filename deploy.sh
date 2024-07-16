rm -r assets/
cd ./app/
npm run deploy
cd ../
git add .
echo "commit..."
git commit -m "deploy"

echo "push..."
git push origin main

