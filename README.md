# 🏥 HealthConnect – Full Stack Doctor Appointment Booking System

HealthConnect is a **full-stack Doctor Appointment Booking System** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It provides separate authentication and dashboards for **Patients, Doctors, and Admins**, enabling seamless appointment booking, management, and administration.

## 🚀 Features

### 👤 Patient Module
- User registration and login
- Browse doctors by specialization
- Book doctor appointments
- Online appointment fee payment
- View and manage appointments
- Update patient profile

### 🩺 Doctor Module
- Doctor login and authentication
- View scheduled appointments
- Track earnings
- Update doctor profile
- Doctor dashboard

### 🛠️ Admin Module
- Secure admin authentication
- Add, update, and manage doctors
- View and manage all appointments
- Admin dashboard with system overview

---

## 🏗️ Project Structure

HEALTHCONNECT/
│
├── frontend/ # Patient-facing React application
│ ├── src/
│ │ ├── component/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── vite.config.js
│
├── backend/ # Backend (Node.js + Express)
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ └── server.js
│
├── admin/ # Admin & Doctor dashboard (React)
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── vite.config.js
│
└── README.md
---

## 🧰 Tech Stack

### Frontend
- React.js (Vite)
- Context API
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token) Authentication
- Multer (file uploads)
- Cloudinary (image storage)

### Payments
- Online Payment Gateway Integration (configurable)

---

## 🔐 Authentication Levels

1. **Patient Authentication**
2. **Doctor Authentication**
3. **Admin Authentication**

Role-based protected routes are implemented for security.

🧪 User Roles

Patient → Book and manage appointments

Doctor → View appointments and earnings

Admin → Manage doctors and appointments

(Admin accounts can be created manually or seeded in the database.)

📌 Use Cases

Doctor Appointment Booking Platform

Hospital Management System

MERN Stack Learning Project

College / Final Year Project

Portfolio & Resume Project

📸 Screenshots


