# HomeNest – Real Estate Listing Platform

## Project Overview

HomeNest is a frontend real estate listing platform developed using **React**. The website allows users to browse property listings, filter properties, submit enquiry forms, and learn about the real estate agency. The project follows a component-based architecture and uses React Router for navigation.

---

## Technologies Used

* React 19
* React Router DOM
* Vite
* JavaScript (ES6)
* CSS Modules
* HTML5
* Git & GitHub

---

## Features

### Home Page

* Responsive Navbar with HomeNest logo
* Hero Section
* Browse Properties button
* Feature Cards rendered using `.map()`
* Benefits Section
* Footer with contact information

### Properties Page

* Property Listings
* Property Cards rendered using `.map()`
* Buy / Rent / Lease filter using `useState`
* Client Testimonials
* FAQ Accordion using `useState`

### Contact Page

* Controlled Form using React `useState`
* JavaScript Validation
* Conditional Error Messages
* Submit and Reset buttons
* Success Message using Conditional Rendering

### About Page

* Mission and Vision
* Agent Cards rendered using `.map()`
* Company Story Timeline

---

## Project Structure

```text
src/
│
├── assets/
│   ├── icons/
│   │   └── homenest-logo.svg
│   └── images/
│
├── components/
│   ├── AgentCard/
│   │   ├── AgentCard.jsx
│   │   └── AgentCard.module.css
│   ├── Benefits/
│   │   ├── Benefits.jsx
│   │   └── Benefits.module.css
│   ├── FAQ/
│   │   ├── FAQ.jsx
│   │   └── FAQ.module.css
│   ├── FeatureCard/
│   │   ├── FeatureCard.jsx
│   │   └── FeatureCard.module.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── PropertyCard/
│   │   ├── PropertyCard.jsx
│   │   └── PropertyCard.module.css
│   ├── Testimonial/
│   │   ├── Testimonial.jsx
│   │   └── Testimonial.module.css
│   └── Timeline/
│       ├── Timeline.jsx
│       └── Timeline.module.css
│
├── data/
│   ├── agents.js
│   ├── benefits.js
│   ├── faq.js
│   ├── features.js
│   ├── properties.js
│   ├── testimonials.js
│   └── timeline.js
│
├── pages/
│   ├── About.jsx
│   ├── About.module.css
│   ├── Contact.jsx
│   ├── Contact.module.css
│   ├── Home.jsx
│   ├── Home.module.css
│   ├── Properties.jsx
│   └── Properties.module.css
│
├── App.jsx
└── main.jsx
```

---

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder

```bash
cd homenest
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Build or preview the app when needed

```bash
npm run build
npm run preview
```

6. Open the application in your browser

```text
http://localhost:5173
```

## Available Scripts

* `npm run dev` - Start the Vite development server
* `npm run build` - Create a production build
* `npm run preview` - Preview the production build locally
* `npm run lint` - Run the project linter

---

## React Concepts Used

* Functional Components
* Component-Based Architecture
* React Router DOM
* Props
* useState Hook
* Conditional Rendering
* Event Handling
* Controlled Components
* List Rendering using `.map()`
* CSS Modules

---

## Folder Organization

* **components/** – Reusable UI components
* **pages/** – Application pages
* **data/** – Static data used for rendering
* **assets/** – Images and other static resources

---

## Future Improvements

* Property Details Page
* Search Functionality
* Backend Integration
* User Authentication
* Database Connectivity

---

## Author

Developed as a React Frontend Project for academic purposes.
