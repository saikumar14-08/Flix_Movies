
# Flix Movies

Welcome to Flix Movies, a modern movie browsing application built with React, Tailwind CSS, and Firebase for authentication and data management. This application allows users to sign in, browse movies, and get movie suggestions powered by a robust backend.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Tailwind CSS Setup](#tailwind-css-setup)
- [Creating Components](#creating-components)
- [React Router Setup](#react-router-setup)
- [Firebase Setup](#firebase-setup)
- [Redux Setup](#redux-setup)
- [Handling Login/Logout Routes](#handling-loginlogout-routes)
- [React Strict Mode Issues](#react-strict-mode-issues)
- [Features](#features)

## Getting Started

To get started with the Flix Movies application, follow the steps outlined in the [Installation](#installation) section.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flix_movies.git
   cd flix_movies
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

## Tailwind CSS Setup

To configure Tailwind CSS in your project, follow these steps:

1. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss@3
   ```

2. Initialize Tailwind CSS:
   ```bash
   npx tailwindcss init
   ```
   This will create a `tailwind.config.js` file in your project.

3. Update the `content` key in `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
     // other configurations...
   };
   ```

4. Add Tailwind directives to your `App.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Creating Components

To create a new React component, you can use the following shortcut:

- Type `rafce` and press Enter to generate a React Arrow Function Component with export.

## React Router Setup

1. Install React Router DOM:
   ```bash
   npm install react-router-dom
   ```

2. Open `Body.js` and create an `appRouter` using `createBrowserRouter`. Define your routes in an array of objects with `path` and `element` entries.

## Firebase Setup

1. Create a project in the Firebase console.

2. Follow the setup instructions, then install Firebase in your project:
   ```bash
   npm install firebase
   ```

3. Create a file named `firebase.js` in the `utils` folder and paste your Firebase config code there.

4. Enable Email/Password authentication in the Firebase console. If you encounter authentication issues, try using a different browser or clear your cache and extensions.

5. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

6. Deploy to Firebase:
   ```bash
   firebase login
   firebase init
   # Be careful while selecting options
   firebase deploy
   ```

For authentication setup, refer to the official documentation: [Firebase Authentication](https://firebase.google.com/docs/auth/web/password-auth).

## Redux Setup

1. Install Redux Toolkit and React Redux:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. Create `appStore.js` and configure the Redux store.

3. Create slices for your state and use them in the store.

4. Import the store into your application.

## Handling Login/Logout Routes

Use `useNavigate` for handling route changes. Ensure that logged-in users are redirected to the `/browse` page, and logged-out users are redirected to the login page. Note that `useNavigate` can only be used inside components of the `RouterProvider` or its children.

## React Strict Mode Issues

If you encounter issues with React Strict Mode, such as `useEffect` running twice, consider removing `React.StrictMode` from `index.js` for debugging purposes.

## Features

- **Sign In Page**
  - Login functionality
  - Sign-up functionality
  - Redirect to the browse page after successful authentication

- **Browse Page** (After authentication)
  - Header with navigation
  - Main movie section featuring:
    - Trailer in the background
    - Movie title and description
    - Movie suggestions
    - List of movies

- **Flix GPT page**
  - Search bar for finding movies
  - Movie suggestions based on user input

---