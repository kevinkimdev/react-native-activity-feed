set -exu
yarn
yarn lint
yarn build
sed 's="main": "./src/index.js",="main": "./lib/index.js",=g' -i.bak package.json
rm package.json.bak
