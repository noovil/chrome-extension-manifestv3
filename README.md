# How to access Firebase Firestore 9 in Chrome Extension Manifest v3

## If you have trouble accessing Firestore after migrating your extension to v3, this might help you.
## In manifest v3, Firestore does not work in a service worker, so it's recommended to use a module bundler like webpack.
### I provided a sample code to show you how it looks like, but you should edit the files and run the following steps (the dist folder is not present as it is empty before you run `npm run build`).

Step 1.

Create a directory to contain all your files, I'll call this the root directory. In your root directory, create two folders, a src and dist folder. In the source folder, create an index.js file that will serve as an entry point to all other dependencies.

Step 2. 

First, make sure that you have node.js installed. 
Navigate to the root directory in your console and run `npm init -y` to create package.json that keeps track of all the dependencies that you need. Then, run `npm i webpack webpack-cli -D` to install webpack and the webpack cli. The `-D` means it's saving to the dev dependencies. Go inside package.json and add `{"build" : "webpack"}` under `"scripts"`. Next, run `npm install firebase`.

Step 3.

Create a file named webpack.config.js inside the root directory. Inside webpack.config.js, we tell webpack which file to look at and subsequently bundle all the dependencies that are imported into that file (in this case, it's index.js). We also specify the path and name of the output file (in this case, it's bundle.js) which we will include in our extension later.

Step 4.

In index.js, import all the functions you need from firebase and initialize the app. Check firebase documentation [here](https://firebase.google.com/docs/firestore/quickstart#web-version-9). You should also include the code that triggers the read and write to the database here.

Step 5.

Run `npm run build` to bundle it all up. A file called bundle.js will be created in the dist folder. Include this script in your extension and voila!

### Note that in the sample code, I use bundle.js in the popup, e.g. saves data to firestore when a user submits a form in the popup. If you run it in the background file, you might get a "document undefined" error.
