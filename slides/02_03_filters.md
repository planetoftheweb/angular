<!-- .slide: data-state="title" -->
#AngularJS
Basic Filters

> > Author Notes:
AngularJS gives you a way to modify content through a series of filters. Although they look the same, some filters are simple transformations for text and others are designed to filter lists. We'll take a look at the simpler ones in this video and the more complex ones in the next.

---

## Basic Filters

<div class="fragment">`currency`, `number`, `date`,<br> `lowercase`, `uppercase`</div>

<div class="fragment">Use the `|` and `:` characters</div>

> > Author Notes:
- Currency is a simple filter for of course formatting currency with an option for different symbols and the number of decimal places.
- The number filter is similar and lets you control the amount of decimal places in a number, date is a nice way to format dates with a ton of easy to use options.
- lowercase and uppercase are pretty self explanatory. They convert some text to the appropriate case.

- To use one of these filters, you use the pipe character inside an expression and then you use a colon to pass along different parameters if needed.

Let's take a few minutes to show you how to implement the uppercase filter in our content because they show you how any of the other filters work.

## Conclusion
Although converting to uppercase or lowercase isn't something you're going to need often, since it's something that CSS can easily handle,
