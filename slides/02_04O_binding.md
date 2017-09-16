02_04_Binding data to inputs using filters
#Introduction
In addition to using filters to modify the data from your models, you can use them to control how the information is bound to your forms. Let's add a search area to our project and use filters to bind the data to our model.
## Setting up
<section class="artistpage">
  <div class="search">
  <h1>Artist Directory</h1>
  <label>search: </label><input type="text" ng-model="query" placeholder="Search for artist" autofocus>
  </div>
  
  <li class="artist cf" ng-repeat="item in artists | filter:query | limitTo: 2 | orderBy: orderBy:direction">
</section><!-- list -->

## Setting up
<section class="artistpage">
  <div class="search">
  <h1>Artist Directory</h1>
  <label>search: </label><input type="text" ng-model="query" placeholder="Search for artist" autofocus>
  </div>
  
  <li class="artist cf" ng-repeat="item in artists | filter:query | limitTo: 2 | orderBy: orderBy:direction">
</section><!-- list -->

## Binding more filters
  <label class="formgroup">by: 
  <select ng-model="orderBy">
    <option value="name">name</option>
    <option value="reknown">reknown</option>
  </select>
  </label>
  <label class="formgroup"><input type="radio" ng-model="direction" name="direction" checked> ascending</label>
  <label class="formgroup"><input type="radio" ng-model="direction" name="direction" value="reverse"> descending</label>


## Hiding the data
You won't always want to show all of your data as soon as the form is displayed, so we can use a different directive called ng-show to show or data only when 

  <ul class="artistlist cf" ng-show="query">

There are some other related directives you can use instead of ng-show.

## Conclusion
This type of dynamic data-binding is probably one of the reasons why Angular.js piqued your interest. Adding filters to your templates by binding them to form elements makes data-binding much more powerful.