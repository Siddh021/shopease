🛒 ShopEase — Smart E-Commerce Platform

**Next-Gen AI-Powered Shopping Experience Built with React**

<p align="center">
  <img src="https://img.shields.io/badge/Framework-ReactJs-61DAFB?logo=react&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Real--Time-Socket.IO-010101?logo=socket.io&style=for-the-badge" />
  <img src="https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Payments-PayPal%20%7C%20Razorpay%20%7C%20UPI-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AI-Recommendation%20Engine-purple?style=for-the-badge" />
</p>

---

## 🚀 Overview

**ShopEase** is a modern, scalable, feature-rich e-commerce platform built using **React.js**, real-time communication, AI-powered personalization, and secure multi-payment workflows.

This project demonstrates real-world front-end engineering patterns along with CI/CD automation, analytics dashboards, wireframing, and agile sprint planning.

---

## ✨ Key Features

### 🧠 AI & Search

* AI-based product recommendations
* Voice & Image search
* Personalized shopping experience

### ⚡ Real-Time & Automation

* Live order tracking through **Socket.IO**
* Admin dashboard with real-time analytics
* CI/CD pipeline using **GitHub Actions**

### 💳 Payments & Checkout

* PayPal, Razorpay, and UPI support
* Secure OAuth login
* Smart cart + discount logic

### 📱 UI/UX

* Responsive mobile-first design
* Modular React architecture
* Component-driven development

---

## 🛠️ Tech Stack

| Category         | Technologies                        |
| ---------------- | ----------------------------------- |
| **Frontend**     | React.js, React Router, Context API |
| **Real-Time**    | Socket.IO                           |
| **Payments**     | PayPal API, Razorpay API, UPI       |
| **Auth**         | OAuth                               |
| **Build/Deploy** | GitHub Actions CI/CD                |
| **AI**           | Recommendation Engine               |

---

## 📁 Folder Structure (High Level)

```
src/
├── components/
├── pages/
├── services/
├── sockets/
├── hooks/
├── context/
├── utils/
└── assets/
```

---

## 🚦 CI/CD Pipeline (GitHub Actions)

The project includes automation steps for:

✔ Linting
✔ Running tests
✔ Building production bundle
✔ Deploying to hosting provider (Netlify / Vercel / Firebase / Custom server)

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Install Dependencies
        run: npm install

      - name: Build Project
        run: npm run build

      - name: Deploy
        run: echo "Add your deploy script here"
```

---
Deployment URL : https://frabjous-cat-286000.netlify.app/
---

## 🙌 Author

**Siddharth Gothadiya**
ITMD 443/543 — Front-End Web Development
Guided by **Prof. Raj Krishnan**

