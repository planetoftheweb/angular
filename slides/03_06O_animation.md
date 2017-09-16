# Introduction
It's time to add some pizzaz to our application. We're going to do that in two ways. We'll add a bit of traditional CSS3 animations and then use Angular special animation capabilities.

http://www.lynda.com/CSS-tutorials/CSS-Animations/115434-2.html

.artistlist li {
  margin: 0;
  padding: 0;
  border-bottom: 1px dotted black;
  opacity: .9;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}

.artistlist a {
  display: block;
  text-decoration: none;
  padding: 10px;
}

.artistlist li:hover {
  background: #FDF6E3;
  opacity: 1;
  -webkit-transform: scale(1.2);
     -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
       -o-transform: scale(1.2);
          transform: scale(1.2);
}


Like with other modules animation in angular is an add-on. So back to the angular.js website to add our 
Add the angular-animate.min.js file

This also needs to be added as a dependency on your controller for this page.

controllers.js
---------
var myAppControllers = angular.module('myAppControllers', ['ngAnimate']);


Also to our template
<li ng-animate="'animate'" class="artist cf"

.artist.ng-enter.ng-enter-active, 
.artist.ng-leave {
  opacity: 1;
  height: 80px;
  overflow: hidden;
}
 
.artist.ng-leave.ng-leave-active,
.artist.ng-enter {
  opacity: 0;
  height: 0;
  overflow: hidden;
}

ng-show="query"

Conclusion
============
Animations are another cool feature of the Angular Framework. I like that they're added as a separate element and that it makes it easier to work with CSS3 animations and that it doesn' rely on javascript methods like jQuery.
