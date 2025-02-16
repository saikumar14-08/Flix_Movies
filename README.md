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

# Redux 
  -> We use redux to handle state changes effectively in large applications.
  -> First we create a centralized store which is a Huge object which has the state information. The state has the data in the for of slices.
  -> To Update the state we follow the below steps:
    -> After the event fires we will dispatch an action
    -> This action in turn calls the reducer which is generally a function.
    -> This reducer updates the store.
  -> To read the updated state:
    -> To access the data from the store we have to use selector which is subscribed to the store and this selector updates our store.
  ======
  -> First, create a slice for the data

# Handling login/logout routes:
  -> We have to use useNavigate for handling the routes i.e., loggedIn user should always redirect to /browse page (even after changing the url) and logged out user should always redirect to login page even if we use /browse in url.
  -> We can't use useNavigate whereever we want it can only be used inside the components of the RouterProvider or its children components.
  -> In our application, RouterProvider has Login and Browse components. Login has Header as child so we added our logic in Header component.
  -> We added only in Header component but not in another components because Header component is loaded in all the pages.
  -> We also have to unsubscribe to the event(Take notes why?)
  ->

React Strict mode issues:
  -> Problem: In development mode, React Strict Mode intentionally calls useEffect() twice to detect side effects that are not properly cleaned up.
  -> Fix: Remove React.StrictMode in index.js (only for debugging).

If you're facing an issue like payload getting repeated then possible issue might be the reducer imported in appStore is wrong.




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