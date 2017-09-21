<!-- .slide: data-state="title" -->
#AngularJS
Conditionals and Booleans

> > Author Notes:
Once our data gets more complex, we'll need to have ways to control the display of DOM elements that are tied to how data works in Angular as well as the ability to loop through different data.

---

## Booleans and Conditionals

- `ng-show`, `ng-hide`
- `ng-if`
- `ng-for`

> > Author Notes:
Theres' two ways to show or hide data depending on what's happening in your application. There are two related directives called ng-show and ng-hide. They do pretty much the same thing depending on the value of an element. ng-show will display an element if the value of an expression is true, whereas ng-hide will hide the element. Both of these uses classes to show or hide the elements, although the elements will still exist in the DOM

- There is a related directive called ng-if, it's a bit different but yields a similar result. It will show an element only if the expression you give it is true. The main difference is that the element will not exist at all...it doesn't just show or hide an element, it creates or destroys the element.

- Another important directive gives us the ability to loop through arrays or objects. Our data is not often going to be as simple as one record, so we can use ng-for to loop through items.


## Conclusion
There's a lot of other directives, but these are the most common ones you'll use in AngularJS. They allow you to control the DOM as well as loop through more complex data.
