# 🔗 URL Shortener (SSR - Full Stack Project)

A URL Shortener web application built using **Node.js, Express, MongoDB**, and **Server-Side Rendering (EJS)**.

---

## 🧠 Project Overview

This project was built using **Server-Side Rendering (SSR)** with EJS, where the backend directly renders HTML pages.

The application allows users to:

- Signup & Login securely
- Shorten long URLs
- Access shortened links
- View all generated URLs

After building the core backend logic, the UI was enhanced using **Bootstrap** to provide a clean and simple user experience.

---

## 🚀 Features

- 🔐 User Authentication (JWT + Cookies)
- 🔑 Secure Login & Signup (Password hashing using bcrypt)
- 🔗 URL Shortening using nanoid
- 📊 View all generated URLs
- 🌐 Redirect to original URL
- ✅ URL Validation (checks if URL is reachable)
- 🎨 Clean UI using Bootstrap
- 🧩 Middleware for protected routes

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Frontend (SSR)
- EJS (Server-Side Rendering)
- HTML + CSS
- Bootstrap

### Database
- MongoDB

### Authentication
- JWT (JSON Web Tokens)
- Cookies

---

## ⚙️ How It Works

```text
User → Login/Signup
      ↓
JWT Token stored in cookies
      ↓
Protected routes accessed via middleware
      ↓
User creates short URL
      ↓
Stored in MongoDB
      ↓
Short URL redirects to original URL
## 📦 installation

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
