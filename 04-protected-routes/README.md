# Routing
* SEO, or Search Engine Optimization, helps search engines track your website's pages based on their routes.
* If you change your route, then so many users can use old routes. this is a bad UX (User Experience).
* If people bookmark your route, then it give bad UX (User Experience).

### MPA
MPA stands for Multi Page Application
-   /home => home.html
-   /about => about.html
-   /learning => learning.html

### SPA
SPA stands for Single Page Application.
* SPAs allow components to be dynamically added or removed from a page without reloading the entire page.
* In React, we use react-router-dom as a third-party package for handling routing.
`npm install react-router-dom`    

### Protected Route
-   /home ->  Normal route accessible to all users.
-   /about -> Protected route
-   /learning -> Protected route
-   /login -> Authentication

* We navigate to the Learning or About page only after successful authentication.
* After successful authentication `<Outlet>` will be opened.

