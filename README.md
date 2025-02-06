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