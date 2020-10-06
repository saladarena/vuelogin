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

Anyway, I w