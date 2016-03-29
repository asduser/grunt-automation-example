## How to

Be sure, that you have installed Node.js and Grunt-CLI. 

If not, download <a href="https://nodejs.org/en/" target="_blank">node.js</a>, install it and use the following syntax:

```batch
npm install grunt -g
npm install grunt-cli -g
```

To check the version use:

```batch
npm -v
grunt --version
```

To build the project just use the CMD-command (or dblclick on it):

```batch
build.bat
```

A compiled version will be rendered into the <b>build</b> directory.

### Production

Be sure, that you exactly included the minified *.js version. Otherwise, your application will be cached on the users PC.
In real application version copy all files within a <b>"build"</b> directory.
