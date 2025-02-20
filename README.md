# 🚀 WorkNest - Virtual Co-Working Space with Scheduled Breaks

WorkNest is a **virtual co-working space** designed to boost productivity by simulating an office-like environment. It includes **role-based authentication**, **scheduled break reminders**, **real-time video collaboration**, and **task tracking**.

## 🎯 Features

✅ **Role-Based Authentication** (Admin, Moderator, User)  
✅ **Real-Time Video Collaboration** (WebRTC)  
✅ **Scheduled Breaks & Notifications**  
✅ **Task & Productivity Tracking**  
✅ **Multi-User Workspaces & Chats**  
✅ **Dark Mode & User Preferences**

---

## 🏗️ Tech Stack

### **Frontend** (Angular)

- **Angular** (Material UI, NgRx, RxJS)
- **WebRTC (PeerJS/Jitsi Meet)** (for video collaboration)
- **Chart.js / Recharts** (for productivity tracking)
- **SCSS** (for modern styling)

### **Backend** (Spring Boot)

- **Spring Boot + Spring Security** (JWT-based authentication)
- **PostgreSQL** (database)
- **Spring Scheduler** (for scheduled breaks & notifications)
- **WebSockets (Spring)** (for real-time updates)
- **Docker** (for containerized deployment)

### **DevOps & Deployment**

- **Vercel / Netlify** (for frontend hosting)
- **Railway / Render / Heroku** (for backend hosting)
- **Docker & GitHub Actions** (for CI/CD)

---

## 📌 Installation Guide

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/worknest.git
cd worknest
```

### **2️⃣ Backend Setup**

```bash
cd backend
./mvnw spring-boot:run
```

🔹 **Access Backend API at:** `http://localhost:8080/api`

### **3️⃣ Frontend Setup**

```bash
cd ../frontend
npm install
ng serve
```

🔹 **Access Frontend at:** `http://localhost:4200`

---

## 🛠️ API Endpoints

### **Authentication**

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| `POST` | `/auth/register` | Register a new user      |
| `POST` | `/auth/login`    | Login user & get JWT     |
| `GET`  | `/auth/me`       | Get current user details |

### **Workspaces**

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| `POST` | `/workspaces/create` | Create a new workspace |
| `GET`  | `/workspaces`        | Get all workspaces     |
| `GET`  | `/workspaces/{id}`   | Get workspace details  |

### **Meetings (WebRTC)**

| Method | Endpoint          | Description               |
| ------ | ----------------- | ------------------------- |
| `POST` | `/meetings/start` | Start a new video session |
| `GET`  | `/meetings/{id}`  | Join an ongoing meeting   |

### **Break Scheduling**

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| `POST` | `/schedule/break`    | Schedule a break    |
| `GET`  | `/schedule/upcoming` | Get upcoming breaks |

---

## 📢 Contributing

1. **Fork** the repo
2. **Create a feature branch** (`git checkout -b feature-branch`)
3. **Commit changes** (`git commit -m "Added new feature"`)
4. **Push branch** (`git push origin feature-branch`)
5. **Open a Pull Request**

---

🚀 **Happy Coding!**

```

---
```
