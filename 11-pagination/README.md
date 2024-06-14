# Pagination
* We know how many Pages.
* we can go particular Page.
* we can show the footer.

# Infinite Scroll
* We don't know web page height.
* we cannot easily go to particular data.
* we cannot see the footer.
* In social media, they uses infinite scroll (users addictive to infinitive scroll).
* Mobile friendly
* Bad for SEO

### Example
* google has shifted from pagination to infinite scroll

### Types of Paginations
* Frontend Pagination
* Server-Side Pagination

#### Frontend Pagination
* fetch all data at once
* Keep the data in redux store
* Here, we can change the page, we don't required API call.
* If you think about user experience, The Page change is faster.
* Only one API call
* In frontend side we need to write more logic (code).
* Initial load time of the page is high.
* Browser will go slow (fetching millions of data is not good)

#### Server-Side Pagination
* Fetch data per Page
* works good on large data
* Initial load time of the page is fast.
* It takes large number of API calls.
* Every logic (code) write on server-side.

### Server-Side Pagination
* Offset Pagination
* API -> /products?page=5&count=20
    -   offset -> page = 2
    -   limit -> count = 20

### cursor pagination
* It is very useful for Real time (Dynamic)
* It is faster than offset pagination

### Normal Pagination
When items deleted or added new items then Pages data will vary when to
previous Page or Next Page.

### Strategy
*   Understand the API
*   We can avoid the over fetching data, we use select.
    `fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')`
*  We can avoid extra information.
