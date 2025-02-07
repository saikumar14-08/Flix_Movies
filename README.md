CLeaned the boilerplate code as per the requirements.
Tailwind configurations:(https://v3.tailwindcss.com/docs/installation)
  Installed tailwind CSS using:
    npm install -D tailwindcss@3
    npx tailwindcss init
  After running above commands you can see tailwind.config.css in your folder structure.
  Add ["./src/**/*.{html,js,jsx,ts,tsx}"] as a value for the key content. This tells that we can use tailwind in files with the mentioned extensions.
  Add @tailwind base; @tailwind components; @tailwind utilities; in App.css file.

Creating components:
  -> type rafce and enter. rafce(react arrow function component export)

React router dom: 
  -> Install by typing npm i -d react-router-dom
  -> After that open Body.js and create an appRouter which has a array of objects called inside the createBrowserRouter. 
  -> In the array of objects we have path and elements entries to specify path and element we want to import.

Firebase setup:
  -> Create a project in firebase console.
  -> While creating a project you'll be asked to follow some process.
    -> Install firebase in frontend project. npm i firebase
    -> Create a file called firebase.js in utils folder and paste the config code there.
  -> Enable EMail/password authentication in firebase console. If you're facing issue in authentication then try using another browser or clear cache and extensions and try again.
  -> After that Install Firebase CLI using npm install -g firebase-tools
    Deploying firebase:
      firebase login
      firebase init
        -> Be careful while selecting options here.
      firebase deploy
  -> Setting authentication in our project can be done using th eofficial documentation.https://firebase.google.com/docs/auth/web/password-auth

-> We set our redux store with user object to handle our login.

-> Redux steps:
  -> Installation: npm i @reduxjs/toolkit and npm i react-redux
  -> Created appstore.js and used configurestore in it.
  -> The use of the configurestore is to take a configuration i.e., reducer
  -> Created a slice
  -> Used the slice in appstore.js
  -> Importing the store in to our app.


Features: 
  -> Sign in page
    -> login page
    -> Sign up page
    -> redirect to bowse page.
  -> Browse page (After authentication)
    -> header
    -> Main Movie
      -> Trailer in Background
      -> Title and description
      -> Movie Suggestions.
      -> Movies list.
  -> NetflixGPT
    -> Search bar
    -> Movie suggestions.