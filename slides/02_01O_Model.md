02_01_Adding basic data
#Introduction
So far we've been working with a real simple model. I want modify our project so that we can create a more realistic application. In order to do that, I'm going to add some new files and modify our view to match our information. So let's dig in.

## Setting up
First, we're going to add some files to our projects and I want to talk about what I'm doing here. Let me add two more folders to my project. First, I'll add an images folder with some photos for my project as well as a css folder with some pre-written CSS. I'm not going to go over how I created the CSS for this project. It's pretty straightforward style sheets. If you need help with CSS, check out [http://www.lynda.com/Web-Interactive-CSS-tutorials/CSS-Fundamentals/80436-2.html]

##Adding a JSON document
I'm also going to add a JSON file to my project. JSON stands for JavaScript Object Notation and is a text format that converts to a JavaScript object very easily. Working with JSON is very easy, but if you need help, make sure you check out my other course. JavaScript and JSON [http://www.lynda.com/JavaScript-tutorials/JavaScript-JSON/114901-2.html]
Alright, the JSON document has the information I'm going to use for my project. It's called data.json. Let's take a look at this to see how my data is structured.
This is a pretty simple JSON file. Our data or model is stored on an array. Each item in the array is itself a series of objects. Inside the objects is a series of name and value pairs with the information for each artist.

##Adding the CSS
Great, So, let's go ahead and wire our page so that it links to our new CSS file

##Using the new data
Now we need to import the data into our application. For right now, I'm just going to copy and paste our JSON file into the artists variable. Although that's not the best way to do this, we've got a lot going on in this chapter, so we'll leave that to the next chapter.

##Modifying our template
It's time to modify our templates. We've got a new data structure, so we need a slightly different template.

##Using ng-img
So, When you preview this on a browser, you can see how the data is flowing into our template just fine, but there's actually an error.

# Conclusion
We've done a bit of setup in order to work towards a more realistic application.  Our model right now is using a large JSON object. It would be a lot better if we could bring that in from an external document, but in order to do that, we'll have to talk about services...we'll tackle that in the next video.

  <div class="main" ng-controller="MyController">   
    <ul class="artistlist">
    <li class="artist cf" ng-repeat="item in artists | filter:query | orderBy: orderby:direction">
      <img src="images/{{item.shortname}}_tn.jpg" alt="Photo of {{item.name}}">
      <div class="info">
      <h2>{{item.name}}</h2>
      <h3>{{item.reknown}}</h3>
      </div>
    </li>
    </ul>
  </div>


var myNameSpace = angular.module('myApp', []);
myNameSpace.controller('MyController', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
  $scope.artists = DATAPASTEDFROMJSON;
  })
});