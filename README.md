Habit Tracker API
📌 Overview

The Habit Tracker API is a RESTful API built with Node.js, Express, and MongoDB.
Its main purpose is to store and manage personal habits, allowing users to organize tasks by priority and classification, making it easier to focus on what matters most.

This project was created as a learning exercise to practice backend development concepts such as REST APIs, MVC architecture, and database modeling with Mongoose.

🎯 Main Features

Create, update, and delete habits (tasks)

Assign priority and urgency to tasks

Classify habits using attributes like:

completion status

color

tag

Filter tasks by classification color

JSON-based API responses

🛠️ Technologies Used

Node.js

Express

MongoDB

Mongoose

Git & GitHub

📂 Project Structure (simplified)
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── app.js
 └── server.js
📦 Data Model Example
Task
{
  "nameTask": "Study Backend",
  "urgency": true,
  "description": "Practice Node.js and MongoDB",
  "deadline": "2026-02-10",
  "classification": {
    "completed": false,
    "color": "red",
    "tag": "study"
  }
}
🔍 Example Endpoint
Search tasks by color
GET /tasks/searchcolor?color=red

Returns all tasks whose classification color matches the provided value.

🚀 Getting Started

Clone the repository

git clone https://github.com/your-username/API_library.git

Install dependencies

npm install

Start the server

npm run dev
📚 Purpose of the Project

This API is intended for learning and portfolio purposes, focusing on:

Backend fundamentals

RESTful design

Database relationships

Clean and consistent code structure

✨ Future Improvements

User authentication

Advanced filters (priority, urgency, completion)

Pagination and sorting

Deployment to a cloud platform
