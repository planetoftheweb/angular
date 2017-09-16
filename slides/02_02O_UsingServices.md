02_02_Using services for external data

#Introduction
In traditional JavaScript, you can use what's called an XHR request to bring in data from a JSON or XML document into your application. You probably know that technique as AJAX. 
In the Angular.Js version, we access external data by using a service called $http and that service links the data to your information using something called dependency injection. Let's take a look.
[http://docs.angularjs.org/guide/dev\_guide.services]

## Setting up
Services are small programs that take care of common tasks. Angular has a number of services you can access to take care of things like bringing in data. This is easy to do, but you're going to run into some other issues that we'll need to take care of.

var myNameSpace = angular.module('myApp', []);
myNameSpace.controller('MyController', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
  $scope.artists = data;
  $scope.orderby = 'name';
  })
});

## Dealing with Same Domain Policy issues
There's a problem that you'll run into when trying to read this JSON document locally. AJAX communication is supposed happen between a client and a server. Your webpage is happily going about it's business and then realizes it wants to load up some data from a server so it uses an AJAX call without reloading the whole page. Beautiful.

If you need to learn more about AJAX and XHR request, make sure you checkout my course JavaScript and AJAX.

1. Use Safari
2. Load your App into a server
3. Run a local PHP or JavaScript server
[http://stackoverflow.com/questions/3102819/chrome-disable-same-origin-policy]
[http://www.lynda.com/JavaScript-tutorials/Nodejs-Essential-Training/141132-2.html]

## Issues with Minification
Theres something else I should mention here. A lot of developers like to minify their javascript so that the code is smaller when it gets launched on a real website. As a matter of fact, when we're importing our angularjs javascript file, it is in this minified format. Minification can cause problems with angular because of the way it works internally. In order to fix that, we're going to modify our script so that  it uses the http service differently, protecting some of the names from minification inside an array.

myAppControllers.controller('ListController', ['$scope', '$http',
function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
  $scope.artists = data;
  $scope.orderBy = 'name';
  });
}]);


## Conclusion
The HTTP service is perfect for bringing in external data files, but you do have to watch out for some issues, especially that same domain policy. Working with services makes our application a lot smaller and easier to update in the future.