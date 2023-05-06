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
        "image1": 'url("https://i.postimg.cc/Y08hfMgd/leaf.png")',
        "image2": 'url("https://i.postimg.cc/G2FBtkpw/plant.png")',
        "image3": 'url("https://i.postimg.cc/y8xSjgLc/hill1.png")',
        "image4": 'url("https://i.postimg.cc/KvJMtrDm/tree.png")',
        "image5": 'url("https://i.postimg.cc/CKfnTyTK/hill5.png")'
      }
    },
  },
  plugins: [],
};