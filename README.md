### Application Configuration

1. first setup Database with below queries in local MYSQL workbench
2. setup python for backend with below commands
3. setup React.js for frontend with below commands

### Frontend - React.JS

- Commands - explanation

1. "npm install" - installing node modules
2. "npm start" - start the react server port number "3000"

### Backend - Python

- Commands - explanation

1. "pip install Flask flask-cors mysql-connector-python" - install the libraries
2. "python app.py" - start the python server in port "5000"

### MySQL

Run below queries for create database and tables for storing "files" and "feedback"

Database --

CREATE DATABASE iadb;

Files --

CREATE TABLE files (
id INT AUTO_INCREMENT PRIMARY KEY,
filename VARCHAR(255) NOT NULL,
filetype VARCHAR(50) NOT NULL,
filepath VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Feedback --

CREATE TABLE feedback (
id INT AUTO_INCREMENT PRIMARY KEY,
user_feedback TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
