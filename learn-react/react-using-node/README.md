# Creating the React application using Node
This project required some additional setup for Node, Webpack and additional loaders for adding the resources to the applicaion like css, image, font etc. 

### Install the Node in your system
1. Download the Node from the [node](https://nodejs.org/en/download) official website and simply install the `msi` or `unzip` the downloaded archieve files and start using the same.
2. Or, Follow the instuction from the [installation steps](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) to install the same.

Once the `Node` was installed then use the `node -v` and `npm -v` commmand from the terminal to make sure the installation done correctly.

### Understand about the WebPack
We have used the `Webpack` to bundle our project including all required styles, fonts, images and other assets as well. It helps in multiple ways to bundle all the resources like combined all javascript into one or do the same for css as well. So `pre-` or `post-` steps can be executed like `minimizing` the assets to increase the performance of the web page application. 

We need to add the `webpack.config.js` to the project which has the all the details about the entry file, pre- or post- execution process, file-handling, copy the file etc but make sure the required loaders should be installed to the application otherwise it won't work properly.

After the bundle was created, it is responsible for injecting the required script, style related tags to the `index.html` page. so, we no need to add them manually. It's important to understand the execution of the loader which will impact the order of execution or bundle creation. The loader will be executed by bottom-up approach so, the last loader will be executed first then finally it will reach to the top one.

In this project used the below loaders:
* <strong>jsx:</strong> babel-loader
* <strong>style:</strong> style-loader, css-loader
* <strong>plugin:</strong> HtmlWebpackPlugin

><i><strong>Note:</strong> The required all resources has to be included in the bundle then it has to be imported through `index.html` page otherwise it won't included in the bundle.

### Understanding about NPM and YARN
The Node Package Manager(NPM) and Yet Another Resource Negotiator(YARN) used for managing node package dependencies which is similar to ANT, MAVEN and GRADLE for java projects. Yarn is more powerful and improved security than NPM.

This project I have used yarn but i will explain how the dependencies are installed through NPM and YARN.But we have to initialize the projecy by executing the `npm init -y` command. It will set default values to the all parameters else you have to execute `npm init` and give the value for each parameter.

<strong>Installing the dependencies using NPM.</strong>

`npm i react react-dom webpack webpack-cli webpack-dev-server --save`

`npm i @babel/core @babel/preset-env @babel/preset-react babel-core babel-core babel-loader babel-webpack-plugin css-loader html-loader html-webpack-plugin style-loader --save-dev`

<strong>Installing the dpendencies using YARN.</strong>

First we need to install the Yarn using `npm install -g yarn` command. Then we can execute the below command to install the dependencies using Yarn.

`yarn add react react-dom webpack webpack-cli webpack-dev-server`

`yarn add @babel/core @babel/preset-env @babel/preset-react babel-core babel-core babel-loader babel-webpack-plugin css-loader html-loader html-webpack-plugin style-loader --dev`

## Run the application
If we checkout the project from the respository then, we need install the dependencies and start the application.

<strong>Run using NPM.</strong>

Install Dependencies: `npm install` or `npm i`

Run the Application: `npm run start`

<strong>Run using YARN.</strong>

Install Dependencies: `yarn` or `yarn install`

Run the Application: `yarn start`

Once the application was started then it will automatically launch the application in default browser.