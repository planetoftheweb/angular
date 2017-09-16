02_03_Basic Filters
#Introduction
Angular.js lets you organize data so that it only shows up if it meets certain criteria.It does this through something called filters and we can use them with expressions or to modify the information from our models.

## Filters Unbound
The easiest way to see how filters work is in expressions.

 <h2>{{item.name | uppercase}}</h2>

[http://docs.angularjs.org/api]

  <li ng-animate="'animate'" class="artist cf" ng-repeat="item in artists | limitTo: 2>
You can also have filters that organize the information.
orderBy: name
orderBy: name:reverse
You can also use filters to limit the amount of results in a model and you can even write your own filters.


orderBy: orderBy:direction

## Conclusion
Filters are a powerful way to organize information and like many other things, Angular makes it easy to do.