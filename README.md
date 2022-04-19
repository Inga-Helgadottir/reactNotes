# Project ToDo

- Links (router, route...)

- form with different inputs

- fetch CRUD

- this.state

- working with data
  
  - many in db.json
  - object imported and exported

- imports and exports

  - js/jsx
  - functions
  - single function
  - css
  - imgs

- if else in one line

- arrays

- icons

- object destructuring

- propTypes & defaults

- spread operators

- map

- filter

- get the time

- react.strictmode (better error comments ??)

- theme color change (check CA2 front-end)

- check moodle for more

(react hvis det ikke er her, bliver vi ikke spurgt om det til eksamen
https://reactjs.org/docs/getting-started.html)

***
# To create a react project

## with npx

open folder in terminal 

always open the terminal in the root of the project if your not sure, 

write ls, if you can see package.json, you are in the right place :)

npx create-react-app name-of-app
(the name of react projects can not be camelcase)

cd name-of-app

code . (opens it up in VSC)

i got the info from here:

https://github.com/facebook/create-react-app/blob/main/README.md#creating-an-app

## with vite (faster)

npm init vite@latest name-of-app
(the name of react projects can not be camelcase)

cd name-of-app

code . (opens it up in VSC)

i got it from here: 

https://reactrouter.com/docs/en/v6/getting-started/tutorial

## To start the project on localhost

(if you cloned the repo, you need start by writing npm i)

(if you made it with npx)

npm start

(if you made it with vite)

npm run dev


## To stop the project

Ctrl + C

***
# To make a mock API

npm i json-server

Add server to package.json on the bottom of scripts

```json
    "scripts": {
        "start": "react-scripts start", //(this one was already here)
        "build": "react-scripts build", //(this one was already here)
        "test": "react-scripts test", //(this one was already here)
        "eject": "react-scripts eject", //(this one was already here)
        "server": "json-server --watch db.json --port 5000"
    },
```

## To Start the mock API

npm run server

now you should have a file called db.json

change stuff here and it gets added to the "API"

## To stop the mock API

Ctrl + C

***
# Deploying with surge.sh

npm run build

npm install -g surge

surge --project ./build --domain A_DOMAIN_NAME.surge.sh
(A_DOMAIN_NAME is just so that you have a name for you site)

now you will be asked for an email and a password 

then you will se a link that looks something like this

http://exercisestest.surge.sh/ (instead of A_DOMAIN_NAME i wrote exercisestest)

***
# files you should delete or change
## Delete the following files

favicon.ico

all png files

manifest.json 

robots.txt 

App.test.js 

logo.svg 

reportWebVitals

setupTests.js

## Change the following

### Add the following folders
    components 
        the components should always start with a capital letter

    styles
        then move the css files to the styles folder

### index.html

```html
    <!--delete lines:-->    
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```
```html
    <!--change:-->
        <title>React App</title>
```
        React App to whatever the name of your project is

### App.js
```javascript
    //delete lines:
        import logo from './logo.svg';
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a  className="App-link" 
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
        Learn React
        </a>
        </header>

    //change line:
        import "./App.css"; to import "./styles/App.css";
```

### App.css
```css
    /*delete everything in here exept:*/
        .App {text-align: center;}

        /*(Only keep the following, if you want the dark header)*/
        .App-header {
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
        }
```
### index.js
```javascript
    //delete lines:
        reportWebVitals();
        import reportWebVitals from './reportWebVitals';

    //change line:
        import './index.css'; to import './styles/index.css';
```

***
# Shortcuts (they only work if you have an extension called ES7 React/Redux/GraphQL/React-Native snippets)
if you dont now how to add an extension
(https://code.visualstudio.com/docs/editor/extension-marketplace)

### clg
```javascript
    console.log(object)
```

### rafce
```javascript
    import React from 'react'
    const Button = () => {
        return (
            <div></div>
        )
    }
    export default Button
```

### rafcp
```javascript
    import React from 'react'
    import PropTypes from 'prop-types'
    const Button = props => {
        return (
            <div></div>
        )
    }
    Button.propTypes = {}
    export default Button
```

### rafc
```javascript
    import React from 'react'
    const Button = () => {
        return (
            <div></div>
        )
    }
    export default Button
```

### fre
```javascript
    array.forEach(currentItem => {})
```

### nfn
```javascript
    const name = (params) => {}
```

### ptsr
```javascript
    PropTypes.string.isRequired,
```

### rcc
```javascript
    import React, { Component } from 'react'
    export default class Button extends Component {
        render() {
            return (
                <div></div>
            )
        }
    }
```

## There are more, to see them open the extension and scroll down

***
## If you want to learn how to make a pretty markdown file like this one
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

or

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

***
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
