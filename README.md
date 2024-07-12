# Portfolio Full-Stack Web Application

Welcome to my portfolio web application! This project showcases my skills and projects as a software engineering student specializing in full-stack development.

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Hosting](#hosting)
- [Contact](#contact)

## About the Project

This portfolio web application is designed to provide an overview of my work, skills, and experiences. It includes sections for an introduction, about me, experiences, projects, contact information, and more. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and aims to provide a seamless user experience.

## Technologies Used

- **Frontend:** React, Redux, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Tools & Libraries:** Axios, Redux Toolkit, Nodemon, Concurrently

## Features

- **Introduction Section:** A brief introduction about me.
- **About Section:** Detailed information about my background and interests.
- **Experiences Section:** A list of my professional experiences and internships.
- **Projects Section:** Showcases the projects I have worked on, with descriptions and links.
- **Contact Section:** A form to get in touch with me.
- **Responsive Design:** Optimized for various screen sizes.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm (Node Package Manager) or Yarn
- MongoDB

### Installation

1. Clone the repository:
     ```sh
      git clone https://github.com/yourusername/portfolio-webapp.git
      cd portfolio-webapp

2. Install dependencies for both frontend and backend:
     ```sh
      cd client
      npm install
      cd ../server
      npm install

3. Create a .env file in the server directory and add your MongoDB URI:
      ```sh
      MONGO_URI=your_mongodb_uri


  

### Usage

1. Start the development Server

   ```sh
   cd server
   npm run dev
   
2. Start the React Application

    ```sh
    cd client
    npm start
3.  Open your browser and navigate to http://localhost:3000.


### Project Structure

     portfolio-webapp/
     ├── client/                  # React frontend
     │   ├── public/
     │   └── src/
     │       ├── components/      # Reusable components
     │       ├── pages/           # React pages
     │       ├── redux/           # Redux store and slices
     │       ├── App.js           # Main App component
     │       └── index.js         # Entry point
     ├── server/                  # Node.js backend
     │   ├── models/              # Mongoose models
     │   ├── routes/              # Express routes
     │   ├── server.js            # Main server file
     │   └── .env                 # Environment variables
     └── README.md                # This file

### Hosting

This Web Aplication is hosted on Heroku. You can visit here https://portfolio-webapplication-mern-264128a12e42.herokuapp.com

### Contact
If you have any questions or would like to get in touch, please contact me at:

Email: tayyabm708@gmail.com <br>
LinkedIn: www.linkedin.com/in/<br>
muhammad-tayyab-7614b9249
GitHub: tayyabm708<br>

Thank you for visiting my portfolio web application. I hope you find it informative and engaging!






