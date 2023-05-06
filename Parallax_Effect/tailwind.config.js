/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image1": 'url("https://i.postimg.cc/zvgN1vG4/grid_0.png")',
        "nature2": 'url("https://i.postimg.cc/v8Nd61L2/background.png")',
       
      }
    },
  },
  plugins: [],
};