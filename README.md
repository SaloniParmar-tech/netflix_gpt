#Netflix GPT

- Create React App (npx create-react-app netflix_gpt)
- Configured Tailwind CSS
   : Got to tailwind official website ->get strat-> frame works ->react app(change the version if the framework is not available)-> Run this command on terminal gor configuration npm install -D tailwindcss@3 , npx tailwindcss init 
   -> add these to app.js file : /** @type {import('tailwindcss').Config} */
     module.exports = {
     content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
     extend: {},
     },
     plugins: [],
     }
   then add these to index.css file:@tailwind base;
     @tailwind components;
     @tailwind utilities;
-






# Features
- Login/Sign Up page
   - Sign In/Sign Up Form
   -redirect to Browse page
- Browse (after authentication)
   - Header
   - Main Movie
     - tailer in background
     - Title & Description
     - Movie Suggestion
        - MovieLists * N
- NetflixGPT
   - Search Bar
   - Movie Suggestions