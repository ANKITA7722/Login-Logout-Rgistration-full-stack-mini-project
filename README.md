# Login-Logout-Rgistration-full-stack-mini-project
This is a **Login and Registration practice project** built for learning and hands-on experience with **full-stack web development**.
# 🔐 Login & Registration System (MERN Practice Project)

## 📌 Project Overview

This is a **Login and Registration practice project** built for learning and hands-on experience with **full-stack web development**.
In this project, a user can **register**, **store data in MongoDB**, and then **login using the same credentials** to access the dashboard.

The project is developed mainly for **practice purposes** to understand frontend–backend integration, authentication flow, and database operations.

---

## 🚀 Features

* User Registration with Email & Password
* User Login using registered credentials
* Data stored securely in MongoDB
* Dashboard access after successful login
* Frontend & Backend connected using REST APIs
* Clean and simple UI for practice

---

## 🧑‍💻 Tech Stack Used

### Frontend

* **React.js**
* HTML5
* CSS3
* JavaScript (ES6)
* Axios (for API calls)

### Backend

* **Node.js**
* **Express.js**
* RESTful APIs

### Database

* **MongoDB**
* **MongoDB Atlas** (for live deployment)

---

## 🛠 Project Workflow

1. User opens the Registration page
2. User enters details (Email & Password)
3. Data is sent to backend using API
4. Backend saves data in MongoDB
5. User clicks on Login icon
6. User logs in using the same email & password
7. After successful authentication, user is redirected to the Dashboard

---

## 📂 Folder Structure

```
project-root/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
│
└── README.md
```

---

## 🌐 Database Information

* MongoDB is used for storing user data
* For live deployment, **MongoDB Atlas** will be used
* Environment variables are used to secure database credentials

---

## ⚙️ Installation & Setup

### Backend Setup

```bash
npm install
npx nodmon
```

### Frontend Setup

```bash
npm install/npm i
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in backend folder and add:

```
MONGO_URI= mongodb://127.0.0.1:27017/ayushidb
```
PORT=8000

Login Details:- 

email:[-admin@gmail.com](mailto:-admin@gmail.com)

password:-admin@123

---

## 🎯 Purpose of This Project

* Practice full-stack development
* Understand authentication flow
* Learn React + Node.js integration
* Hands-on experience with MongoDB & MongoDB Atlas
* Improve API handling skills

---

## 📌 Future Improvements

* Password encryption using bcrypt
* JWT authentication
* Role-based access
* Better UI/UX
* Form validation
* Logout functionality

---

## 🧠 Learning Outcome

This project helped me understand:

* Frontend & backend communication
* User authentication flow
* Database integration
* Real-world project structure
* MERN stack fundamentals

---

## 👩‍💻 Author

**Ankita Bobde**
Full Stack Developer (Learning Phase)

---

⭐ *This project is created for learning and practice purposes.*
