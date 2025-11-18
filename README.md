#### Description


#### Options (only for FE)
- [React Icons](https://react-icons.github.io/react-icons/)

#### npm Packages

```
npm init -y

npm install --save-dev typescript ts-node ts-node-dev @types/node @types/express
npx tsc --init

npm install express
npm install morgan
npm install --save-dev @types/morgan
npm install express-handlebars

npm install pg-promise
npm install mongoose@8.10.1
npm install mongoose-slug-generator --save
npm install redis

npm install method-override
npm install --save-dev @types/method-override
npm install dotenv --save
npm install --save-dev @types/dotenv

npm install jsonwebtoken
npm install bcrypt
npm install cookie-parser

npm install --save-dev nodemon
npm i sass --save-dev

npm install cross-env

npm install --save-dev --save-exact prettier
npm install --save-dev lint-staged
npm install husky --save-dev
```

#### package.json

```
"scripts": {
    "test": "cross-env NODE_ENV=test node src/index.js",
    "dev": "nodemon",
    "start": "cross-env NODE_ENV=production node src/index.js",
    "watch": "sass --watch src/resources/sass:public/css"
},
"lint-staged": {
    "src/**/*.{js,json,scss}": "prettier --write --single-quote --trailing-comma all --tab-width 4"
},
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
```
