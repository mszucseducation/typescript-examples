# Typscript commands

## to run typescript files just type
tsc <appname>.ts

## Install some automatic commands to run
```
npm init
```

## install a dependency for this project
```
npm install --save-dev lite-server
```

> Now with lite server you just need to add the command in the package.json (under scripts)

```
"start": "lite-server"
```
> This will automatically reload the page when you make changes when you run the tsc command again so you dont need to re-load the server again

## If you delete the node_modules folder just run this in the terminal:
```
npm install
```

## To run the program just do (open two terminals)
npm start
tsc app.ts