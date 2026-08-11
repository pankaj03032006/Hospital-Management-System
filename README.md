

# 🏥 Hospital Management System

<p align="center">
  A full-stack Hospital Management System built with the MERN stack to streamline patient management, doctor management, appointment scheduling, billing, pharmacy inventory, and hospital operations.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react" alt="React.js" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens" alt="JWT" />
  <img src="https://img.shields.io/badge/Material_UI-UI-007FFF?style=for-the-badge&logo=mui" alt="Material UI" />
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [User Roles](#-user-roles)
- [Modules](#-modules)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Authentication & Authorization](#-authentication--authorization)
- [Database](#-database)
- [API Structure](#-api-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- 
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)


---

# 📌 Overview

The **Hospital Management System** is a full-stack web application developed using the **MERN stack**.

The system provides a centralized platform for managing important hospital operations such as:

- 👨‍⚕️ Doctor management
- 🧑‍🤝‍🧑 Patient management
- 📅 Appointment scheduling
- 💳 Billing and payments
- 💊 Medicine inventory
- 👤 User management
- 📊 Dashboard and analytics

The application uses **JWT-based authentication** and **role-based access control (RBAC)** to ensure that users can access only the functionality permitted to their roles.

The goal of the project is to reduce manual hospital administration, centralize healthcare records, and provide an efficient interface for hospital staff.

---

# ✨ Features

## 🔐 Authentication & Authorization

- Secure user registration and login.
- JWT-based authentication.
- Protected API routes.
- Role-based access control.
- Session/token validation.
- Authorization based on user roles.

---

## 👤 User Management

Administrators can manage hospital staff accounts.

Features include:

- Create users
- View users
- Update user information
- Delete users
- Assign roles
- Manage account status

---

## 🧑‍🤝‍🧑 Patient Management

The system maintains centralized patient records.

Features include:

- Register new patients.
- Update patient information.
- View patient profiles.
- Maintain medical information.
- View patient history.
- Manage patient records.

Example patient information:

```text
Patient
├── Personal Information
├── Contact Information
├── Medical History
├── Appointments
├── Prescriptions
└── Billing Information
