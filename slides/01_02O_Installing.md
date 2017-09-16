01_02_Installing Angular JS
# Introduction
Installing angular into your web projects is pretty simple. It's a lot like adding any other library, you can download or link to the code from Angular's Website at [angularjs.org]. From there, you have a bunch of options

## Installing
- If you're into GitHub you can go to the repository from this page. Github is going to let you take a look at and give you the option to download a more comprehensive version of the library. Unless you REALLY want to look at the guts of Angular, you'll probably want to use some of the other options.
- If you click on the download button (img), you have some other options. You can choose to download different branches, link to the CDN or get the command to install with bower if you have that application installed. The easiest two options are to either link to a CDN or download a version of the library.
- Downloading will have the advantage of letting you work offline. I think that if you're working in development this will be a lot better, since it won't require a call to the internet in order to work.
- If you're launching the site live on a sever, linking to the CDN has the advantage of using your browser cache if your browser has previously visited a site using using the CDN link. It makes it a bit faster than having to download a copy.

## Prepping your files
As with any web project, you'll probably want to set up some folder, so let's quickly walk through that. I'm going to create a folder on my desktop I'll call "angular" and open this up on my text editor. Then I'll create a css folder, a js folder and create an index.html file.
Now, I'll place a copy of the angular.js file in the js folder, and I'll add a style.css and script.js file in there.
I'll create a basic template with the minimum angular.js code.

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular JS App</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
</body>
</html>

So far, that looks like a regular HTML template.

Let's make this into an Angular Application. First, we need to add the call to angular.js. You might be tempted to do this at the end of your HTML before the closing body copy, but Angular is doing a lot more than just adding functionality to your HTML so we want to do this at the very top, so it loads our framework first, so we'll do that right before our call to the CSS.

%% <title>Angular JS App</title>
`  <script src="js/angular.js"></script>`

Next, we'll need to tell angular which parts of our application to manage. You do that by adding an attribute called `ng-app` to your HTML. This is called a Directive. A directive is a command we're giving to the library. Angular is well documented, so you can find out more about hg-app [on this page]. Commands or directives, as they're known in Angular start with the letters ng, then a hyphen and the name or the directive. This is the app directive, which tells Angular which part of our page to manage.
Surprisingly enough, you can use Angular in just a section or a `DIV` within your HTML, but most of the time you'll want it to handle your entire webpage, so in that case most people will place the ng-ap attribute inside the HTML tag.

  <html lang="en" ng-app>

And that's pretty much it for a template...Let's go ahead and write the typical Angular demo just to show you that it is indeed working. 

'' <input type="text" ng-model="name">
'' <h2>Welcome {{name}}</h2>

## Directives
Here, you can see our second angular command or directive...As it says in [the documentation] This command let's us bind a model to a form element, but what is that? Think of a model as data...but this data that can have superpowers like functions and properties associated with it.

## Expressions
In the next line we see a mostly regular looking HTML line of code with some funky double curly brackets. Angular uses these double curly braces to create expressions. Yep, you're probably familiar with expressions from Math. Expressions are a combination of symbols that mean something...like a formula, so when you add two numbers together, the addition is considered an expression.
Obviously expressions can be super complicated, but we're using a super simple one here and the only thing that it's doing is showing the value of our name variable or model.

# Data Binding
The real magic happens when you pull this up on a browser. Whatever you enter in our form will immediately get mirrored into our expression. That's one of the coolest features of Angular and it's called two-way data binding. It means that your data or model is directly tied to our expression. Updating one has an effect on the other.

# Conclusion
You may have seen this type of example before and it's pretty impressive. If you know JavaScript, you can appreciate how Angular is using templating and data-binding to make what would take us several lines of JavaScript to accomplish something that we can do with just our HTML document.
If you're getting started with Angular, especially if you're coming from JavaScript is to walk away with an understanding of the jargon here and a basic feeling for how angular works. Installing Angular gives you a ton of capabilities and superpowers...and yes, working with the rest of the  framework feels just as magical.
