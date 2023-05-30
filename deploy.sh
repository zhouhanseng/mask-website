echo "----------Start building  ----------"
npm run deploy:build

echo "----------Start copy files----------"
cp -rf ./public/gatsby-assets/. ../Maskbook-Website/gatsby-assets
cp -rf ./public/index.html ../Maskbook-Website/
cp -rf ./public/404 ../Maskbook-Website/
cp -rf ./public/download-links ../Maskbook-Website/
cp -rf ./public/faq ../Maskbook-Website/
cp -rf ./public/about ../Maskbook-Website/
cp -rf ./public/tf-docs ../Maskbook-Website/
