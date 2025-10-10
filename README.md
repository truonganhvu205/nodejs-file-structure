#### Description

#### npm Packages

```
npm init

npm i express
npm i morgan --save
npm i express-handlebars
npm i mongoose
npm i mongoose-slug-generator
npm install method-override
npm install dotenv --save
npm install jsonwebtoken
npm install bcrypt
npm i cookie-parser

npm i nodemon --save-dev
npm i sass --save-dev
npm install cross-env --save-dev

npm install --save-dev --save-exact prettier
npm install --save-dev lint-staged
npm install husky --save-dev
```

#### package.json

```
"scripts": {
    "start": "nodemon --inspect src/index.js",
    "watch": "sass src/resources/scss:src/public/css --watch",
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
