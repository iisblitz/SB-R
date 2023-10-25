# Address Book CRUD Application

This is a simple full-stack CRUD (Create, Read, Update, Delete) application for managing an address book. It's built using MySQL, Spring Boot, React, and Material-UI. This README will guide you through the setup and usage of the application.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, Read, Update, and Delete contacts in an address book.
- User-friendly Material-UI design.
- Backend API built with Spring Boot.
- Frontend built with React for a responsive user interface.

## Prerequisites
Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for the frontend.
- [Java](https://www.java.com/) for the backend.
- [MySQL](https://www.mysql.com/) for the database.
- An integrated development environment (IDE) like [Eclipse](https://www.eclipse.org/) or [IntelliJ IDEA](https://www.jetbrains.com/idea/).

## Getting Started
1. Clone this repository to your local machine.
   

   git clone https://github.com/yourusername/address-book.git

   Navigate to the project directory.



cd address-book
Install frontend dependencies.


cd frontend
npm install
Install backend dependencies using your IDE or by navigating to the backend folder and using the terminal:
cd backend

For Maven:
mvn clean install


For Gradle:
gradlew clean build

##Project Structure
The project is structured into two main parts:

frontend: Contains the React-based user interface.
backend: Contains the Spring Boot application for the REST API and MySQL database interactions.
Running the Application
Database Setup: Create a MySQL database and configure its connection properties in backend/src/main/resources/application.properties. Make sure to adjust the spring.datasource.url, spring.datasource.username, and spring.datasource.password accordingly.

##Database Initialization: 
The database tables will be created automatically by Hibernate. You can find the SQL script in backend/src/main/resources/data.sql.

##Backend: 
Run the Spring Boot application. This will start the backend server on http://localhost:8080.

##Frontend: 
Start the React development server for the frontend.
cd frontend
npm start
This will start the frontend application on http://localhost:3000.

##Usage
Once the application is up and running, open your web browser and navigate to http://localhost:3000. You can now perform CRUD operations on the address book.

##Contributing
Feel free to contribute to this project by forking the repository and submitting a pull request. We welcome your ideas, suggestions, and improvements.

##License
This project is licensed under the MIT License - see the LICENSE file for details.

