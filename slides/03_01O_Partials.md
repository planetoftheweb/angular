03_01_Splitting your work into partials
#Introduction
Once your applications get bigger, it's a good idea to split up how you organize your content. On a normal website you do that by using different pages, but Angular, after all is a framework for creating single page applications. The way we do that with angular is to use a technique called routing.

## What is routing
Routing means loading different sub templates depending on the URL of the page. It turns on another cool angular feature called Deep Linking. 

Let me explain...One of the problems with single page applications is that they don't work well with the browser's back button or bookmarking. That's because by definition, a single page applications are on a single page. So how do you get angular to pretend that a single page is actually an entire website.
Angular uses a special service called $routeProvider to provide a feature it calls deep linking.
[http://docs.angularjs.org/api/ngRoute.$routeProvider]
Deep linking takes care of looking at the location URL and managing how it maps to the current state of the page.
It does this by setting up different URLs depending of the state of the page. It takes advantage of a feature you already use on single web pages with the hashtag. Say, for example that you go to the bootstrap website
Routing takes advantage of those commonly used hashtag symbols to control how Angular loads different pieces of content.

## Adding the angular-route.min.js file
We're going to need to load an additional script into our application. In newer versions of Angular, the library is split up into several modules and we need to download the routing module in order to get this working.

## Creating the partials folder
Now create a folder called partials and a file called list.html

## The list partial
<section class="artistpage">
</section>
cut the contents of the list area and paste it into the partials
I'll also remove the controller call from the main div, since each of the different views will use their own controllers.

<div class="main" ng-controller = "MyController"></div>

Instead, we'll identify this as an ng-view. That means that this area of HTML will be controlled by the different snippets of code we create in our partial files.

<div class="main" ng-view></div>

## Updating our Controllers
The next thing we need to do is to update our controllers.js file. Right now, this file takes care of setting up our application. We're going to divide the controller logic from the application logic, so we need to take the references to the App and make it only apply to the controllers.

var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
  $scope.artists = data;
  $scope.artistOrder = 'name';
  });
}]);

## Conclusion
That's quite a bit of setup for one movie. Routing is going to make your applications more efficient. In addition to downloading the routing file, we have to split up our work and modify how we work with controllers. The final step is to re-create our application module and set up our routes. I'll take care of that in the next video.