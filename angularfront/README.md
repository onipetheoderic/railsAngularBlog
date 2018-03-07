Install MaterializeCSS and angular2-materialize from npm && jQuery 2.2 and Hammer.JS are required

npm install materialize-css --save
npm install angular2-materialize --save

npm install jquery@^2.2.4 --save
npm install hammerjs --save
npm install font-awesome --save


"styles": [
      "styles.sass",
      "../node_modules/materialize-css/dist/css/materialize.css",
      "../node_modules/font-awesome/css/font-awesome.css"
    ],
      "scripts": [
      "../node_modules/jquery/dist/jquery.js",
      "../node_modules/hammerjs/hammer.js",
      "../node_modules/materialize-css/dist/js/materialize.js"
    ],


//After testing the whole authentication process of signing In app.component.ts

// We now move to this: 
// we create the home component first
 ng g c home

// we create the toolbar component secondly
 ng g c toolbar

//we now create the auth-dialog component to display the login and register forms
 ng g c auth-dialog