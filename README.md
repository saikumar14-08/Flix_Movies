CLeaned the boilerplate code as per the requirements.
Tailwind configurations:(https://v3.tailwindcss.com/docs/installation)
  Installed tailwind CSS using:
    npm install -D tailwindcss@3
    npx tailwindcss init
  After running above commands you can see tailwind.config.css in your folder structure.
  Add ["./src/**/*.{html,js,jsx,ts,tsx}"] as a value for the key content. This tells that we can use tailwind in files with the mentioned extensions.
  Add @tailwind base; @tailwind components; @tailwind utilities; in App.css file.



Features: 
  -> Sign in page
    -> Form
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