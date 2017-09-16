01_04_Modules & Scope
#Introduction

In the last video, I talked about the Model View Controller architecture that most modern web applications follow. One of the key concepts is that  you can organize your large application into modules, separating functionality into small pieces of JavaScript. In Angular JS, we do that by creating different controllers for our application. In this video, I'll show you how to put those concepts to practice using Angular.js.

To do that, I'll start by creating a separate JS folder. In that folder, we'll create a new file called controllers.js.

We'll move our javascript to that folder and link to that file. We'll put all of our application code inside a module. You do that with Angular's module method.

	var myApp = angular.module('myApp', []);

We're creating a variable called myApp to hold this module. The variable myApp will contain all of the code for our application. This is called namespacing and it's a way to protect our application code to make sure that no other script on your website will interfere with our application. So, the variable myApp is unique to our Angular application.

Since our module is going to have our application code, we'll need to update our ng-app directive.

    <html lang="en" ng-app="myApp">

	Remember that the ng-app directive is just a command. In this case, this command tells Angular that the code for whatever is inside the HTML tag...which in this case is our entire page...will be controlled by this new myApp module.

Now, lets create a controller. Remember that this is a piece of javascript that will control  something on the page. You can create different controllers and tell them to control different parts of your application. 
	        
    myApp.controller('MyController', function MyController($scope) {
    });

Since we're giving this controller a name of MyController. That's important and we'll need it in an minute. We're also asking that controller to use something called $scope. This is a super variable that you can use to pass things from JavaScript to your application and vice versa.

Now, we're going to need a model...or some data. We'll create a model manually this time and because we want to do something with that data in our template, we'll place it inside our scope variable.

	  $scope.author = {
    'name' : 'Ray Villalobos',
    'title' : 'Staff Author',
   'company' : 'Lynda.com'
 }
	

Alright, we've got a controller and a model, now we need to update our template so that it uses these. We'll need to tell the template that we want to use the controller we just created.

		<div ng-controller = "MyController">
		  <h1>{{author.name}}</h1>
		  <p>{{ author.title + ', ' + author.company }}</p>
		</div>

Once we do that, we can output the data in our scope variable as if it were part of our page.


# Conclusion
Organizing your App into modules is the first step towards creating a more realistic application. On a larger application, you write all kinds of modules and controllers that handle different types of functionality on a page. For now, this gives you an idea of what it's like working with AngularJS.