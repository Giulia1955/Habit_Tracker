Habit Tracker API

Overview
The Habit Tracker API is a RESTful API built with Node.js, Express, and MongoDB.
Its main purpose is to store and manage personal habits, allowing users to organize tasks by priority and classification, helping them focus on what is most important.

This project was developed as a learning exercise to practice backend development concepts, RESTful APIs, MVC architecture, and database modeling with Mongoose.

Main Features

Create, update, and delete habits (tasks)

Assign priority and urgency to tasks

Classify habits using attributes such as completion status, color, and tag

Filter tasks based on classification color

JSON-based API responses

Technologies Used

Node.js

Express

MongoDB

Mongoose

Git and GitHub

Project Structure (simplified)
src/
controllers
models
routes
app.js
server.js

Data Model Example

Task example:
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

Example Endpoint

Search tasks by classification color:
GET /tasks/searchcolor?color=red

This endpoint returns all tasks whose classification color matches the provided value.

Getting Started

Clone the repository
git clone https://github.com/your-username/API_library.git

Install dependencies
npm install

Start the development server
npm run dev

Purpose of the Project
This API is intended for learning and portfolio purposes, focusing on backend fundamentals, RESTful API design, database modeling, and clean code organization.

Future Improvements

User authentication

Advanced filtering by priority, urgency, and completion status

Pagination and sorting

Deployment to a cloud platform
