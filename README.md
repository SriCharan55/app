

# 📘 Interview Prep App

An **AI-powered Interview Preparation Platform** built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

This app is designed for **users of all experience levels** — from **freshers** to **experienced professionals** — to prepare effectively for technical interviews with **AI assistance**. It is fully **responsive**, ensuring a smooth experience across devices.

---

 The Challenge in Interview Preparation

Preparing for interviews today is often:

* 🔍 **Scattered** – Candidates jump between multiple websites, blogs, and videos to find questions.
* ⏳ **Time-Consuming** – Wasting hours searching instead of practicing.
* 🎯 **Unfocused** – No personalization based on the candidate’s target role or years of experience.
* 📖 **Surface-Level Learning** – Even if questions are found, detailed explanations are often not there.

👉 As a result, candidates feel **overwhelmed and underprepared**, especially when they need **structured guidance**.

---

## ✅ Our Solution – Interview Prep App

The **Interview Prep App** makes preparation **simple, focused, and AI-powered**:

* 🤖 **AI-Generated Questions & Answers** – Tailored to your **role, experience, and focus topics** using **Google Gemini AI**.
* 🧑‍💼 **Role-Based Sessions** – Create interview sessions for specific roles (e.g., Frontend Developer, UI/UX Designer).
* 🎯 **Personalized Learning** – Define your **experience level, topics, and goals** for a custom prep plan.
* 📌 **Pin Important Questions** – Save key questions for **quick revision**.
* 📖 **Learn More Explanations** – Get **detailed AI explanations** for concepts you don’t understand.
* 🗑️ **Session Management** – Users can **delete old sessions** and create new ones anytime.
* ⚡ **All-in-One Platform** – No need to browse multiple websites — everything is available here.
* 📱 **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.

👉 Instead of wasting hours searching, candidates can **create a session, practice role-specific questions, revise pinned ones, learn concepts deeply, and manage sessions — all in one platform**.

---

## 🔄 App Flow

1. **Sign Up / Login** – Secure JWT-based authentication.
2. **Dashboard** – Displays all sessions created by the user.
3. **Create New Session** – Fill out quick details:

   * Target Role (e.g., Frontend Developer, UI/UX Designer)
   * Years of Experience (e.g., Fresher, 1 year, 5+ years)
   * Topics to Focus On (e.g., React, Node.js, MongoDB)
   * Description (Goals or notes for the session)
4. **AI Interview Journey** – AI generates **questions + answers**.

   * Pin important questions 📌
   * Use "Learn More" for detailed explanations 📖
5. **Manage Sessions** – Users can:

   * **Delete a session** they no longer need 🗑️
   * **Create a new session** for another role or skill set

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS, Custom CSS (for extra styling)
* **Backend:** Node.js, Express.js, Multer (for profile photo uploads)
* **Database:** MongoDB (Atlas / local)
* **AI Integration:** Google Gemini API (for AI-driven questions & explanations)
* **Authentication:** JWT-based authentication
* **Deployment:**

  * Frontend → Vercel
  * Backend → Render

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/interview-prep-app.git
cd interview-prep-app
```

### 🔹 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
GEMINI_API_KEY=your_gemini_api_key
```

Run backend:

```bash
npm start
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend` and add:

```
REACT_APP_BASE_URL=http://localhost:8000
```

Run frontend:

```bash
npm start
```

---

## 🚀 Deployment

* ** (Vercel):** \[https://app-git-main-sri-charans-projects-775b067f.vercel.app/]


---

