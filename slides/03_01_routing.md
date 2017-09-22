<!-- .slide: data-state="title" -->
#AngularJS
Deep Linking

> > Author Notes:
To create more complex application, we can split up our code into different pages through something called deep linking. This is the process of making different URLs load up different content and be managed by different code in your application.

---

## Deep Linking

- `ngRoute`
- `$routeProvider`
- `ng-view`
- Defining controllers

> > Author Notes:
- Deep linking is handled through something a separate module called ngRoute. We'll have to load that module into our app using a different JavaScript file.
- Once we load up this library, we can configure our application through something called routeProvider, where we can specify what's going to be loaded by different URLs.
- This module works with a special directive called ng-view, which then loads up the appropriate code depending on our URLs, so since we're going to be using different controllers.
- Because we're going to potentially not just one controller, but many, we'll have to change the way we're working with controllers and redefine our application.


## Conclusion
Deep linking makes it easier to load different content through URLs. Although we're loading just one route here, you'll see that it becomes more useful as we add other routes.
