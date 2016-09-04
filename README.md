MEAN STACK APP STARTER
----------------

##### THis repo contains the folder structure and files to get a MEAN stack app running. To Start:

-  Clone the project to your work directory
```
~/PROJECT $ git clone git@github.com:andela-ofamakinde/MEAN-STACK-STARTER.git
```
```
~/PROJECT $ cd meanstackdemo
```
- Install `MongoDB` and make sure a `mongod` instance is running.
```
~ $ mongod
```

- Run `npm start` in your file directory to start the application
```
~/PROJECT/meanstackdemo $ npm start
    [nodemon] 1.9.2
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching: *.*
    [nodemon] starting `node index.js`
    listening on 8001
```
- Go to `http://localhost:8001/` on you browser

- To start `AngularJs` test run `karma start` in the project directory on the command line
 ```
~/PROJECT/meanstackdemo $ karma start
```
- To start `ExpressJs` test run `mocha test` in the project directory on the command line
```
~/PROJECT/meanstackdemo $ mocha test
```