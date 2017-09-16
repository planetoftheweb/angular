# Up and Running with Angular.js
## What is Angular.js?
Angular JS is a JavaScript framework for creating single page web applications. However, a lot of times when you hear about it, there's a lot of technical jargon associated with the framework, so Let's take a minute to understand some of the main concepts behind Angular.js

- Angular is a **Framework**
%% A framework implies that instead of writing code however you want, you change the way you write your applications and follow the standards set by the framework. By doing this, you can take advantage of some of the built in features like...and with Angular.js, that means things like templating,  filters, two way data-binding and more. If you've ever worked with something like Bootstrap or jQuery Mobile, you're familiar with how this works. You do things a certain way and that gives you super power.

- For creating **Single Page Apps** 
%% Single page web apps means that regardless of the size of your app, your browser is going to load a single page. Additional content will be loaded into the application as needed, so don't worry that you won't be able to load other 'pages'. Your users won't know the differences and in some ways this will be faster since your site loads only the content it needs instead of the entire page.

- With a heart of **JavaScript**
%% The language used to create content for this framework is JavaScript, so you should be familiar with working with the JavaScript language before you work with Angular.

# Up and Running with Angular.js
## Built in features
%% Angular.js gives you a faster way to create apps because it provides several features that would take you a lot of time to write yourself.
- Excellent templating engine
%% So, for example, it comes with an excellent templating engine. Templating lets you write HTML template with special tags and Angular will replace those tags with data. Angular doesn't make you build the templates separately like some other libraries, Your templates are integral part of your HTML so it's easier than using libraries like Mustache or Handlebars.
- Handles the DOM masterfully
%% Another cool feature of Angular is the way that it works with HTML's document object model. In traditional applications, you have to worry about checking for event triggers. With Angular, the data is directly bound to your template. So, pulling in data immediately populates your HTML.
%% Angular even includes a lightweight copy of jQuery called jQueryLite wich gives you jQuery's more important commands for DOM manipulation when that becomes necessary.
- Easy data manipulation
%% Angular includes commands for loading external data by including AJAX functionality, so it can easily load a JSON document.

# Up and Running with Angular.js
## Model View Controller Architecture
%% Modern JavaScript applications used an object oriented approach to programming that is normally referred to an MVC or a Model, View Controller architecture. You can use this approach with Angular to accomplish your goals. Let's talk about those.
- Models
%% In an MVC architecture, your data is known as a model. This is information that might come from an internal data structure or an external JSON document or database.
- Views
%% Views are how your data or models are displayed. This is usually done through a template, so whenever you hear of a view, it really means the template that you use to display your data.
- Controllers
%% Controllers are the glue that ties your data or models to your views or templates. Controllers are written in JavaScript but the way models views and controllers are implemented in Angular means we have to talk about some other concepts.

# Up and Running with Angular.js
## Core Features
%% The MVC architecture is handled by using a variety of techniques, so let talk about those.
- Directives
%% Angular uses something called directives that you place in your HTML. Directives are nothing more than commands sprinkled throughout your HTML that tell Angular how to do it's job. The commands begin with the letters ng and then a hyphen.
- Data binding
%% Data binding is what makes templating possible, You can create placeholders for content that gets linked to a data information, but you can also create form elements that are tied to the data.
- Filters
%% Angular has a filtering language so data is organized a certain way automatically or easily changed by form elements.
- Modules
%% Instead of creating a single gigantic JavaScript document, you break up your functionality into modules. That makes your code easier to maintain.
- Routes
%%  Routes lie at the heart of a single page application. it lets you divide your templates so that the functionally behind your application can exist in different places.
- Controllers
%% Instead of creating a single gigantic JavaScript document, you break up your functionality into modules. That makes your code easier to maintain.


# Conclusion
Hopefully that gives you an idea of what you're getting into. Hopefully you can see that Angular provides some huge advantages to creating web applications. You just have to learn how to work with it's special flavor of HTML and JavaScript.