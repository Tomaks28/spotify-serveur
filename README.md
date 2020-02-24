## TypeScript Setup With Node & Express

1. npm install -g typescript (add sudo before to add in computer env)
2. touch server.ts
3. tsc --init
4. change in tsconfig.json file target value from es5 to es6
5. uncomment in tsconfig.json file outDir and add "./dist"
6. uncomment in tsconfig.json file rootDir and add "./src"
7. uncomment in tsconfig.json file moduleResolution
8. npm init -y
9. npm install express cors mongoose graphql express-graphql axios dotenv
10. npm install -D typescript ts-node nodemon @types/node @types/express @types/cors
11. add on package.json
    "scripts": {
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts",
    "build": "tsc -p ."
    }
12. npm run dev
