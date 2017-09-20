<!-- .slide: data-state="title" -->
#AngularJS
Modules and Controllers

> > Author Notes:
In order to create better applications, angularJS allows you to define modules and controllers. Together, they handle the functionality of your applications.

---

## Working with Modules

- `module()`, `ng-app`
- `controller()`, `ng-controller`
-  `$scope`

> > Author Notes:
The module is a container for different parts of your application, so for example we can have different controllers within our module. In order for a module to work you'll need to connect the module to our HTML using the ng-app directive we used in the previous video.

- Once we have a module, we can specify one or more controller. Controllers are pieces of code that handle some specific functionality within a module. An application can have multiple controllers that do different things, and in order to specify where a specific controller handles functionality, we can use the ng-controller directive.

A controller can be defined with different dependencies. Dependencies is just a name for something a controller needs in order to work. One of the most common ways to initialize components is using a special variable called $scope. Think of scope as a global object that we can use to communicate between our JavaScript and HTML. If we insert a variable in our scope, then it means that we can use it in our HTML. Let's see how this works.

## Conclusion
Modules and Controllers are a fundamental part of working with AngularJS. They allow you to set up communications between our scripts and our templates. The scope variable is the glue that lets our data, which is sometimes called models work with our views...which are also called templates.

https://gist.github.com/planetoftheweb/3b43ebbd1cc11afecfabb112f68cd43d
