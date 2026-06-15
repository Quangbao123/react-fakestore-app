# React FakeStore App

A responsive e-commerce web application built with React and FakeStore API for learning modern frontend development concepts, including state management, routing, API integration, and local persistence.

## Overview

This project simulates the core functionalities of an online shopping platform. Users can browse products, view detailed information, manage a shopping cart, authenticate with a mock API, and edit their profiles.

The application was developed as a practice project to strengthen skills in React ecosystem technologies and prepare for full-stack development with Flask and Django.

## Screenshots

### Homepage
<img width="1912" height="1086" alt="Screenshot 2026-06-15 130853" src="https://github.com/user-attachments/assets/a9527078-b75d-42ff-9ff4-b72300259d2d" />

### Shopping Cart
<img width="1915" height="1091" alt="image" src="https://github.com/user-attachments/assets/fcfb8403-875a-4a69-975d-e9fd005efcf7" />

### User Profile
<img width="1918" height="1087" alt="image" src="https://github.com/user-attachments/assets/bd3dab04-7157-48bd-95b8-dc042582b502" />

## Live Demo

* Demo: 
* Repository: https://github.com/Quangbao123/react-fakestore-app

## Features

* User authentication using FakeStore API
* Product listing with category filtering
* Shopping cart management
* Persistent cart data using Local Storage
* User profile management
* Form validation for profile editing
* Responsive user interface
* Client-side routing

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Redux Toolkit
* Axios

### API

* FakeStore API

### Storage

* Local Storage

## Project Structure

```text
src/
├── components/
├── pages/
├── redux/
├── services/
├── assets/
├── App.jsx
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Quangbao123/react-fakestore-app.git
```

Navigate to the project directory:

```bash
cd react-fakestore-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev / npm start
```

Open your browser and visit:

```text
http://localhost:3000
```

## Learning Outcomes

Through this project, I gained practical experience with:

* Building reusable React components
* Managing application state with Redux Toolkit
* Consuming REST APIs using Axios
* Handling form validation and controlled components
* Implementing client-side routing
* Persisting data with Local Storage
* Organizing scalable frontend project structures

## Limitations

* FakeStore API does not persist user updates permanently.
* Authentication is simulated and not production-ready.
* Payment and order processing are not implemented.
* Administrative dashboard is intentionally excluded to focus on frontend fundamentals.

## Future Improvements

* Integrate a custom Flask REST API
* Connect to a relational database (MySQL or PostgreSQL)
* Implement JWT authentication
* Add search and pagination features
* Migrate the backend to Django for advanced development
* Deploy the project so that everyone can run and test

## Author

Nguyen Quang Bao

* GitHub: https://github.com/Quangbao123
* Email: nguyenquangbao575@gmail.com

## License

This project is developed for educational purposes.
