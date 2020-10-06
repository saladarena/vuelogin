# vuelogin
Webapp Login based on vuejs 

## Purpose


1.  vue cli create a scaffolder
2.  app with login and main info pages
3.  login and logout using JWT token 
4.  all kinds of routing (login, no login, logout, token expired, unknow url)
2.  fake backend server using vue-cli-server 

## scaffoldering

npm install @vue/cli

vue create logindemo

###

Welcome to Your Vue.js + TypeScript App
For a guide and recipes on how to configure / customize this project,
check out the vue-cli documentation.

#### Installed CLI Plugins
babel,router,vuex, eslint, typescript

Essential Links
Core DocsForumCommunity ChatTwitterNews

#### Ecosystem
vue-router,vuex,vue-devtools,vue-loader, awesome-vue


### VS code hiding  node_modules  within workspace

```
	"settings": {
		"git.scanRepositories": [
			"/opt/rh/sclo-git25/root/usr/bin/"
		],
		"files.exclude": {
			"**/node_modules": true
		}
	}
```

### git store username and password  

Caution:  password is in plain text. 

```
(base) [admin@vuehack ~]$ git config --global credential.helper store 
```

###  Source from element-ui-admin

To be honest, element-ui-admin is some kind of "good" example in vue world.  By "good" I mean there are few vue example better than this one. However, element-ui-admin's codes  really sucks, it can not be good app example comparing to all  kinds of front app, , I mean android app or iOS app. 

At this time, I could not determine  it is because 
a) vue framework not good enough? 
b) all web front based on js tech always sucks?   As we all know, javascript is kind of "shit" programming language. Based on that, current front tech such as angular, react or vue are already kind of miracle.  Is there any chance  


###  webpack dev server as mocking server
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },

The following description can only be found in some blog instead of in webpack official document. 
What a strange world. 
```
  The webpack-dev-server is in fact a simple Express server that uses the webpack-dev-middleware under the hood. Whenever you start it, it will run Webpack in 'watch' mode. This means that every change you make to your source code, will make Webpack transform this source and serve it for any browsers. This means that it's not only taking care of the conveyor belt, but it's also acting as a server that serves the bundle to a browser.
```


It is ironic that JS document have to use sample code  to explain the behavior of the  interface instead of syntax based definitation such as in java. 
```
devServer.before
function (app, server, compiler)

Provides the ability to execute custom middleware prior to all other middleware internally within the server. This could be used to define custom handlers, for example:

webpack.config.js

module.exports = {
  //...
  devServer: {
    before: function(app, server, compiler) {
      app.get('/some/path', function(req, res) {
        res.json({ custom: 'response' });
      });
    }
  }
};
```

#### webpack dev server 's proxy feature so as to enable a customized express server as mock server. 

More advanced usage please go to  the web link below.

 [https://webpack.js.org/configuration/dev-server/#devserverproxy]

 ```
 devServer.proxy
object [object, function]

Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.

The dev-server makes use of the powerful http-proxy-middleware package. Check out its documentation for more advanced usages. Note that some of http-proxy-middleware's features do not require a target key, e.g. its router feature, but you will still need to include a target key in your configuration here, otherwise webpack-dev-server won't pass it along to http-proxy-middleware).

With a backend on localhost:3000, you can use this to enable proxying:

webpack.config.js

module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
```



