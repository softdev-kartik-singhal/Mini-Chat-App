# Mini-Chat-App

A simple chat application built using **Node.js**, **Express**, **MongoDB**, and **EJS** for templating. It allows users to send, edit, and delete chat messages, mimicking basic features of a messaging platform.

## 🚀 Features

- View all chat messages
- Create a new chat message
- Edit an existing chat message
- Delete a chat message
- Simple, minimalistic front-end using EJS templates

## 🛠️ Technologies Used

- **Node.js**: Backend JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing chat messages
- **Mongoose**: MongoDB ODM for schema modeling
- **EJS**: Embedded JavaScript templates for rendering HTML

## 📁 Project Structure

- `index.js` - Main application file where the server and routes are configured
- `chat.js` - Contains database model logic (Mongoose schema)
- `init.js` - Initialization logic, e.g., database connection
- `index.ejs` - Main chat listing view
- `edit.ejs` - View for editing an existing chat
- `package-lock.json` & `package.json` - Dependency management
- Static files like CSS are served to style the application

## ⚡ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/whatsapp-lite.git
   cd whatsapp-lite

2.   Install Dependencies : npm install
3. Start MongoDB : mongosh
4. Run the Application : node index.js
5. Open Your Browser and Navigate to : http://localhost:3000
