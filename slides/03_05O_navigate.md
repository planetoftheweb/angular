03_05_Adding Navigation

# Introduction
We've got all of the elements of an Angular App with multiple routes, let's go ahead and enhance things a bit. I'm going to add some navigation so that we can cycle through our artist array and I'm going to do that with traditional JavaScript


  <a class="btn btn-left" href="#/details/{{prevItem}}">&lt;</a>
  <a class="btn btn-right" href="#/details/{{nextItem}}">&gt;</a>



  if ($routeParams.itemId > 0) {
    $scope.prevItem = Number($routeParams.itemId)-1;
  } else {
    $scope.prevItem = $scope.artists.length-1;
  }

  if ($routeParams.itemId < $scope.artists.length-1) {
    $scope.nextItem = Number($routeParams.itemId)+1;
  } else {
    $scope.nextItem = 0;
  }

Conclusion
============
The nice thing about working with Angular.js is that it's plain ole, familiar JavaScript. Once you understand the basic structure, you can program it just as you would any other of your applications.