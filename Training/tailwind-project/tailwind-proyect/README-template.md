# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [https://github.com/Georgodev24/Riak/tree/main/Projects/tailwind-project/tailwind-proyect](https://your-solution-url.com)
- Live Site URL: [https://riak.vercel.app](https://your-live-site-url.com)

## My process

I initially configured my work environment to make styles in TailwindCSS, I structured the page by sections and I developed them little by little in a simple and fast way and then I took care of the more complex details, such as the slider or the error handling of the form.

For the slider was the main challenge of the page, since I didn't want to make a state around it, I used react-slick and the initial results pleased me. Then, I gave some details to match the environment of the project, such as changing the color of the arrows or the repositioning of the slider dots.

Then, it occurred to me that it was a good idea to create a component based on the customer testimonial letters, this way everything would be cleaner and it would be a reusable component.

Then, I made the validation logic of the form according to the requirements through javascript and I also added an error message under the form.

Finally I separated the components into folders to make it easier to locate the code of each section of the page and separated the validation logic to make everything as clean and modular as possible.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TailwindCSS](tailwindcss.com)
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev) - Front-End Tool

### What I learned

I learned a way to make responsive carousels through other means than setting up a state, I also learned how to deploy applications in vercel, since I had always used github pages or netlify.

### Continued development

I would like to keep growing when it comes to creating reusable react components, I am aware that the site may not be properly composed and I would like to receive feedback to understand what things I can improve or what ideas would be useful to compose the site properly.

### Useful resources

- [https://react-slick.neostack.com](https://www.example.com) - This helped me for it has helped me to create a carousel component without the need to use states and all in a fast and easy way

## Author

- Frontend Mentor - [@Georgodev24](https://www.frontendmentor.io/profile/yourusername)
