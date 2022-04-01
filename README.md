# This project was started 01/04/2022
# To create a react project

open folder in terminal and write

npx create-react-app name-of-app
(the name of react projects can not be camelcase)
cd name-of-app
code . (opens it up in VSC)

i got it from here:
https://github.com/facebook/create-react-app/blob/main/README.md#creating-an-app

# To start the project on localhost

npm start

# To stop the project

Ctrl + C

# To make a mock API

npm i json-server
(Basic http server)

Add server to package.json on the bottom of scripts
"scripts": {
    "start": "react-scripts start", (this one was already here)
    "build": "react-scripts build", (this one was already here)
    "test": "react-scripts test", (this one was already here)
    "eject": "react-scripts eject", (this one was already here)
    "server": "json-server --watch db.json --port 5000"
},

# To Start the mock API

npm run server
now you should have a file called db.json
change stuff here and it gets added to the "API"

# To stop the mock API

Ctrl + C

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

Add the following folders
    components 
        the components should always start with a capital letter
    styles
        then move the css files to the styles folder

index.html
    delete lines:
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    change:
        <title>React App</title>
        to whatever the name of your project is

App.js
    delete lines:
        import logo from './logo.svg';
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
        Learn React
        </a>
        </header>
    change line:
        import "./App.css"; to import "./styles/App.css";

App.css
    delete everything in here exept:
        .App {text-align: center;}

        (Only keep the following, if you want the dark header)
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

index.js
    delete lines:
        reportWebVitals();
        import reportWebVitals from './reportWebVitals';
    change line:
        import './index.css'; to import './styles/index.css';

# Shortcuts (they only work if you have an extension called ES7 React/Redux/GraphQL/React-Native snippets)
if you dont now how to add an extension
https://code.visualstudio.com/docs/editor/extension-marketplace

clg
    console.log(object)

rafce
    import React from 'react'
    const Button = () => {
        return (
            <div></div>
        )
    }
    export default Button

rafcp
    import React from 'react'
    import PropTypes from 'prop-types'
    const Button = props => {
        return (
            <div></div>
        )
    }
    Button.propTypes = {}
    export default Button

rafc
    import React from 'react'
    const Button = () => {
        return (
            <div></div>
        )
    }
    export default Button

fre
    array.forEach(currentItem => {})

nfn
    const name = (params) => {}

ptsr
    PropTypes.string.isRequired,

rcc
    import React, { Component } from 'react'
    export default class Button extends Component {
        render() {
            return (
                <div></div>
            )
        }
    }

## There are more, to see them open the extension and scroll down

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
