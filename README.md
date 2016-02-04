# Requirements
You'll need node JS for the project. You can install node at:
https://nodejs.org/en/blog/release/v0.10.36/

This should install node and NPM.

# Installation
To get started. Clone the repository.
```shell
$ git clone git@github.com:brandaid/dashboard.git
```
Grunt will be needed to run this project. Use the commands below to install Grunt and then save the dependencies. Depending on your system permissions, you may need to run `sudo` in front of these commands.
```shell
$ npm install grunt-cli -g
$ npm install --save-dev
```

`npm install --save-dev` will install the dependencies stored in `package.json`.

# Serving the project
The project uses Sass to compile. The Bourbon mixin library is included as well, in case you need short hand for writing CSS3.

BrowserSync is installed as well. BrowserSync will refresh the page as you save your changes, so you don't have to refresh each time.

Now that you have all the dependencies, let's run the project. Run:
```shell
$ grunt
```

This will start the default task which watches for sass changes, start BrowserSync and load the site at http://localhost:4000.

# Contributing
The [develop](https://github.com/brandaid/dashboard/tree/develop) branch is used to develop new features. The [master](https://github.com/brandaid/dashboard/tree/master) branch should remain the most stable branch for the project.

The site can be pushed to the [gh-pages](https://github.com/brandaid/dashboard/tree/gh-pages) branch if you need to see a hosted version of your changes. The site is served at http://brandaid.github.io/dashboard.
