## How to

Be sure, that you have installed Node.js and Grunt-CLI. 

If not, download <a href="https://nodejs.org/en/" target="_blank">node.js</a>, install it and use the following syntax:

```
npm install grunt -g
npm install grunt-cli -g
```

To check the version use:

```
npm -v
grunt --version
```

## Bundles

1. `git clone https://github.com/asduser/grunt-automation-example.git`.
2. `cd grunt-automation-example`.
3. In root directory use `npm install` via CMD. It will install all needed project dependencies.
4. To build the project just put in CMD `grunt build-automation` (or dblclick on *.bat file):

```
build.bat
```

Compiled version will be rendered into the **build** directory.

## Production

Be sure, that you exactly included the minified `.js` version. Otherwise, your application will be cached on the users PC.
In real application version copy all files within a **build** directory.
