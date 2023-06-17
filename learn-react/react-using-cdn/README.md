# Creating the React application using CDN
This is simple and very easy to setup and working with React application. There is no installation of node package is required for this example. But we have to add the required library directly from the Content Delivery Network(CDN) url in the `<head></head>` tag of html which will helps to load the required library for this application to run.

The below libraries are required to work with this React application
1. <strong>React:</strong> It is mandatory to use the basic packages and JSX elements was used in the project.
    
    Use the below `script` tag to add this dependency.
    
    `<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>`
2. <strong>ReactDOM:</strong> It will helps to work with JavaScript XML(JSX) which helps to reduce the more work for the developer. It will identify the required elements and perform some action. JSX helps to write both html element and javascript code in the same place and this will be properly interpretted by the browser. 

    Use the below `script` tag to add this dependency.
    
    `<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>`
3. <strong>Babel:</strong> It helps to convert the code into browser understandable code then only the application will run on the broeser without any issues. Otherwise the browser won't able to understand the code to be executed.
    
    Use the below `script` tag to add this dependency.
   
   `<script src='https://unpkg.com/babel-standalone@6.24.0/babel.js'></script>`


## Run the application
We can run this application in multiple ways but I had given the below

1. Open the `index.html` page directly from the any of the valid browser like Chrome, Edge, Firefox, Safari etc.
2. You can install the `Live Server` extension in `Microsoft VS Code` editor then right-click on the `index.html` and select `Open with Live Server` option from the context menu.


><i><strong>Note:</strong> The script tags will directly loading the dependency from the network so, please ensure the internet connection while accessing this application. Otherwise it won't be working as expected.