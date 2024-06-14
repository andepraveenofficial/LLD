# Infinite Scroll
1. `window.innerHeight` -> Visible Height of the window
2. `document.body.scrollHeight` -> Total height of the webpage
3. `window.scrollY` -> How much I have scrolled.
*   Reach the end of the Page -> `window.scrollY + window.innerHeight`
*   End of the Page -> `window.scrollY + window.innerHeight` === `document.body.scrollHeight`

### Logic
*   once you reach the bottom of the page, make api call and append the data.

