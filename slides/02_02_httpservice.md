<!-- .slide: data-state="title" -->
#AngularJS
Using Angular Services

> > Author Notes:
In order to expand the functionality of angularJS, you can use something called services. You can either add your own or use a few of the ones provided by AngularJS.

---

## AngularJS Services

- `$http`
- Runs with a server
- Returns a promise

> > Author Notes:
- One of the most popular services that come with AngularJS is the http service which allows you to handle AJAX requests to load json or other files.

- Whenever you use AJAX to load a file, you are going to need to run a server because AJAX has to make a request to a server for some data in order to work. A lot of times in web development, we're simply opening an HTML into our browser. This is not going to work when we use the HTTP service.

Thankfully, if you've gone through the installation video, you know that I've created a simple server that should already be running when you begin each video.

- The other thing to remember is a request to a file doesn't stop the browser from doing other things. It's what we call Asynchronous, so javascript uses something called promises, which means that when the request is ready we can execute some code. I think this will make more sense if we see an example.


## Conclusion
Making AJAX requests is really common on web applications and the http service in angular is a super simple way to make requests. It's also a good example of a service, which expands the functionality of AngularJS.
