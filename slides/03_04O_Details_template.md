# Introduction

Now that we've set up the routing features plus the controllers for our details view, it's time to set up the template. It's going to be pretty much like what we did when we set up the list.html partial.

In this new page, we're going to be creating a section with a class of artistinfo. And then create a div with a class of artist as well as a clear fix class just like before. This is also going to be using the ng model called artists

```
<section class="artistinfo">
  <div class="artist cf" ng-model="artists">
    <h1>{{artists[whichItem].name}}</h1>
    <div class="info">
      <h3>{{artists[whichItem].reknown}}</h3>
      <img ng-src="images/{{artists[whichItem].shortname}}_tn.jpg" alt="Photo of {{artists[whichItem].name}}">
      <div class="bio">{{artists[whichItem].bio}}</div>
    </div>
  </div>
  <a href="/#list">&laquo; Back to search</a>
</section>
```

# Conclusion
Routing is a really important part of using AngularJS. Hopefully what we did here with reinforces what we learned creating the list partial and gives you a really good idea of how to extract useful information from routes using the $routeparams service.