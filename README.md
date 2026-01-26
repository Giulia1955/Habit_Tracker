🌱 Habit Tracker API

A RESTful API designed to help users store, organize, and prioritize personal habits, making daily routines easier to manage and track.

This project focuses on separating habits by priority and classification, allowing better organization and focus on what truly matters.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

📖 Overview

The Habit Tracker API was developed using Node.js, Express, and MongoDB.
It provides endpoints to create, manage, and filter habits (tasks), with special attention to priority handling and classification attributes such as urgency, completion status, color, and tags.

The project was built mainly for learning and portfolio purposes, applying best practices in backend development and RESTful API design.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

✨ Features

✅ Create, update, and delete habits

🚦 Organize habits by priority and urgency

🎨 Classify habits using:

  -completion status

  -color

  -tag

🔍 Filter habits by classification color

📦 JSON-based REST API

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

🛠️ Technologies

Node.js

Express

MongoDB

Mongoose

Git & GitHub

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

🗂️ Project Structure
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── app.js
 └── server.js

 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
📊 Data Model Example
Task Object
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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔗 Example Endpoint
Search habits by classification color
GET /tasks/searchcolor?color=red

This endpoint returns all tasks whose classification color matches the provided value.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 Getting Started
1. Clone the repository
git clone https://github.com/Giulia_1955/API_library.git
2. Install dependencies
npm install
3. Run the application
npm run dev

The API will be available at:

http://localhost:3000

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

🎓 Project Purpose

This project was created to practice and demonstrate knowledge in: Backend development fundamentals, RESTful API architecture, Database modeling with MongoDB and Mongoose, Clean and organized code structure and it also serves as a portfolio project.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔮 Future Improvements

🔐 User authentication and authorization

📊 Advanced filters (priority, urgency, completion status)

📄 Pagination and sorting

☁️ Deployment to a cloud platform

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

👩‍💻 Author

Giulia Mezaroba

GitHub: Giulia_1955

Email: giuliamezaroba@gmail.com

✨ Feel free to explore, test, and improve this project!
