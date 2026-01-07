🌈 **Judix Task App**

**Judix Task App** is a full-stack, scalable task management application built with **Next.js**, **Node.js/Express**, and **MongoDB**.

It features **JWT authentication**, **profile management**, and a **task dashboard** with full **CRUD operations**.

---

## 🚀 Features

### 💻 Frontend

* **Next.js + React** for modern SPA experience
* **Responsive design** with **TailwindCSS**
* **Protected routes**: Dashboard accessible only after login
* **Dynamic Navbar**: Shows **Login/Signup** for guests, **Profile/Logout** for logged-in users
* **Forms**: Client-side validation
* **Dashboard**: Add, update, delete, search, and filter tasks
* **Profile Page**: View and update user information

### 🔧 Backend

* **Node.js + Express** RESTful API
* **MongoDB** database via **Mongoose**
* **JWT-based authentication** for secure sessions
* **Password hashing** using **bcrypt**

**API Endpoints:**

* `POST /users/signup` – Register a new user
* `POST /users/login` – Login and issue JWT
* `GET /users/profile` – Fetch profile
* `PUT /users/profile` – Update profile
* `GET /tasks` – Fetch all user tasks
* `POST /tasks` – Add a new task
* `PUT /tasks/:id` – Update task
* `DELETE /tasks/:id` – Delete task

### 📊 Dashboard

* **Add tasks** with title & description
* **Search and filter tasks** in real-time
* **Delete tasks** instantly
* **Update profile**
* **Logout securely**

### 🔒 Security & Scalability

* Passwords hashed using `bcrypt`
* JWT authentication middleware for protected routes
* Input validation & error handling
* Modular and scalable project structure

---

## 🗂 Project Structure

```
app/
├─ components/
│  ├─ Navbar.tsx
│  ├─ ProtectedRoute.tsx
│  └─ TaskCard.tsx
├─ dashboard/
│  └─ page.tsx
├─ login/
│  └─ page.tsx
├─ profile/
│  └─ page.tsx
├─ signup/
│  └─ page.tsx
├─ layout.tsx
├─ globals.css
└─ utils/
   └─ api.ts

server/
├─ models/
│  ├─ Task.js
│  └─ User.js
├─ routes/
│  ├─ taskRoutes.js
│  └─ userRoutes.js
├─ middleware/
│  └─ authMiddleware.js
└─ server.js
```

---

## ⚡ Installation & Setup

1. **Clone the repository**

```
git clone <repo-url>
cd judix-task-app
```

2. **Install dependencies**

```
npm install
cd server
npm install
```

3. **Setup environment variables** (`.env` file)

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

4. **Start backend server**

```
cd server
npm run dev
```

5. **Start frontend server**

```
npm run dev
```

6. **Open in browser**

```
http://localhost:3000
```

---

## 🌟 Usage

1. **Sign Up**: Create a new account at `/signup`
2. **Login**: Access `/login` with your credentials
3. **Dashboard**: Manage tasks at `/dashboard`
4. **Add/Delete/Search Tasks** easily
5. **Profile**: View or update your info at `/profile`
6. **Logout**: Click **Logout** in the navbar

---

## 🛠 Technologies Used

**Frontend:** Next.js, React, TailwindCSS, Axios, React Hook Form

**Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT

**Tools:** Postman for API testing

---

## 🔧 Scalability Notes

* **Frontend:** Component-based architecture
* **Backend:** Separate routes, middleware, and models
* **Authentication:** JWT tokens stored in `localStorage`
* **Database:** User-specific tasks collection for multi-user support

---

## 📄 API Endpoints Overview

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| POST   | /users/signup  | Register a new user          |
| POST   | /users/login   | Login and receive JWT        |
| GET    | /users/profile | Fetch logged-in user profile |
| PUT    | /users/profile | Update profile info          |
| GET    | /tasks         | Get all tasks for the user   |
| POST   | /tasks         | Add a new task               |
| PUT    | /tasks/:id     | Update a task                |
| DELETE | /tasks/:id     | Delete a task                |
