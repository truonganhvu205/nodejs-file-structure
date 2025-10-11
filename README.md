#### Description

#### npm Packages

```
npm init

npm install express
npm install morgan
npm install express-handlebars
npm install mongoose
npm install mongoose-slug-generator --save
npm install method-override
npm install dotenv --save

npm install jsonwebtoken
npm install bcrypt
npm install cookie-parser

npm install --save-dev nodemon
npm i sass --save-dev

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
