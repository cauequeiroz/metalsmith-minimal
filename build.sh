npm start;
cd public;
git init .;
git add .;
git commit -m "Deploy";
git push git@github.com:cauequeiroz/metalsmith-minimal.git master:gh-pages --force;
rm -rf .git