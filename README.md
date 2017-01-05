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

1. In root directory use `npm install` via CMD. It will install all needed project dependencies.

2. To build the project just use `grunt build-automation` (or dblclick on *.bat file):

```
build.bat
```

Compiled version will be rendered into the <b>build</b> directory.

3. Use `npm install` command only if you don't have npm_modules directory in root.

## Production

Be sure, that you exactly included the minified *.js version. Otherwise, your application will be cached on the users PC.
In real application version copy all files within a <b>"build"</b> directory.
