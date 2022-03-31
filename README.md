# Create Component React TS

A NPM Package use to generate react typescript components using [plop](https://www.npmjs.com/package/plop).


## Install

#### Using NPM
```bash
npm i create-component-react-ts
# or
npm install --save create-component-react-ts

npm install --global create-component-react-ts
```

#### Or Yarn
```bash
yarn add create-component-react-ts

yarn global add create-component-react-ts
```


## Usage
Add ./node_modules/.bin/create-component-react-ts to package.json scripts also can alias to short name
```json
{
  "scripts": {
    "create-component-react-ts": "./node_modules/.bin/create-component-react-ts",
    "create-react": "./node_modules/.bin/create-component-react-ts"
  }
}
```

```bash
npm run create-react component Example1
npm run create-component-react-ts component Example1

yarn create-react component Example1
yarn create-component-react-ts component Example1
```

Example
```bash
yarn create-component-react-ts component TodoTable
yarn create-component-react-ts layout AdminLayout
yarn create-component-react-ts page TodoPage
yarn create-component-react-ts context Todo
yarn create-component-react-ts hook Todo
yarn create-component-react-ts service ApiTodo
yarn create-component-react-ts utils Storage
```

NOTE:
Required packages
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks)

```bash
npm install --save react-router-dom
npm install --save @testing-library/react-hooks
# or
yarn add react-router-dom
yarn add @testing-library/react-hooks
```
