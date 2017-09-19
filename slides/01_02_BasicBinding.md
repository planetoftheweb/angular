<!-- .slide: data-state="title" -->
#AngularJS
Binding and Directives

---

## Binding

- Declaring your `ng-app`
- AngularJS directives
- `ng-model` directive
- `{{}}` expression

> > Author Notes:
One of the great things about angularJS is that it lets you create a relationship between the data and the rest of you code. This is called binding and means linking a piece of data to some other code or element in a page.

In order to get this to work, we'll need to make sure we first add our angularjs script so that the library loads, but then also identify which part of your page will be managed by AngularJS. You can do that by using a special command called ng-app.

- ng-app is a type of directive in AngularJS. A directive is a fancy name for a command. Commands...or directives in angularJS almost always begin with the ng prefix and look just like html attributes.

- Another directive is the ng-model directive, which creates a variable in you application and goes inside an HTML form element. The variable can be accessed in your scripts as well as in your templates...in Angular this is called two-way data binding.

- In order to display our data, we can use double curly braces in our HTML to create an expression. Think of an expression as a way to show the value of variables in HTML.

## Conclusion
One of the great features in Angular is this ability to create applications that use two way data binding to set up a relationship between our code and our HTML. In this case, we didn't even have to write any JavaScript, so you can see how easy and powerful it is to work with Angular.
