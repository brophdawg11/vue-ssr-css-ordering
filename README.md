Reproduction repository for an ordering issue with Vue SSR using extracted CSS.

The underlying issue seems to be the non-deterministic ordering of `<link rel="stylesheet">` tags inserted by the Bundle Renderer when in development or production mode.

## Steps to reproduce

* Assuming `node@8` and `npm@5+`
* Clone this repository
* `npm install`

### Production Build 

* `npm run prod`
  * Builds and starts the app with `NODE_ENV=production`
* Open `http://localhost:8080/`
  * Note the text is blue as expected
* Click to the About page
  * Note the text is green as expected

The styles in play here are:
  * An `.global { color:red; }` style in `App.vue`
  * An `.home { color: blue }` style in `Home.vue` 
  * An `.about { color: green }` style in `About.vue` 

In production mode, the extracted stylesheets are loaded in the following order:
  * `app.css`
  * `about.css`
  * `home.css`

It's curious that `about.css` comes before `home.css` even when SSR-ing the home page.  However, the main point is that in this case, `app.css` is loaded prior to both of the route-specific stylesheets, allowing for a proper cascade from global to more-specific styles.


### Development Build 

* `npm run dev`
  * Builds and starts the app with `NODE_ENV=development`
* Open `http://localhost:8080/`
  * Note the text is in blue as expected
* Click to the About page
  * **Note that the text is red, not green as it should be**   

In development mode, the extracted stylesheets are loaded in the following order:
  * `about.css`
  * `app.css`
  * `home.css`

In this case, the ordering is incorrect, as it places the global _after_ the more-specific route-level styles and breaks the expected cascade from global to more-specific styles.
