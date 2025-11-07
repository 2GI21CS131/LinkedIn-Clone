# LinkedIn Clone - Full Stack Developer Internship (AppDost)

This project is a simple, full-stack social media web application built as an assignment for the Full Stack Developer Internship at AppDost.

[cite_start]It fulfills the core requirements of user authentication, post creation, and a public feed, all built on the MERN stack [cite: 4, 29-31].

---

## 🚀 Live Demo

* **Frontend (Deployed on Vercel/Netlify):** `[PASTE_YOUR_LIVE_FRONTEND_URL_HERE]`
* **Backend (Deployed on Render/Railway):** `[PASTE_YOUR_LIVE_BACKEND_URL_HERE]`

---

## 🛠️ Tech Stack

This project was built using the MERN stack:

* **Frontend:** React.js, React Router, Axios, React Context API
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JSON Web Tokens (JWT) & `bcryptjs` for password hashing
* **Deployment:**
    * Frontend deployed on **[Netlify/Vercel - CHOOSE ONE]**
    * Backend deployed on **[Render/Railway - CHOOSE ONE]**

---

## ✨ Features Implemented

* **User Authentication:**
    * Users can register for a new account with a name, email, and password.
    * Users can log in to their existing accounts.
    * The user's session is securely managed with JSON Web Tokens (JWT).
    * The user's name is displayed in the navigation bar when logged in.
* **Post Creation:**
    * Logged-in users can write and submit new text-based posts.
* **Public Feed:**
    * All posts from all users are visible on the main feed page.
    * The feed is sorted to show the **latest posts first**.
    * Each post displays the author's name, the post content, and the creation timestamp.

---

## ⚙️ How to Run the Project Locally

To get this project running on your local machine, follow these steps.

### Prerequisites

* Node.js (v18 or later)
* npm
* Git
* A MongoDB Atlas account (or a local MongoDB server)

---

### 1. Clone the Repository

```bash
git clone [PASTE_YOUR_GITHUB_REPO_LINK_HERE]
cd linkedin-clone