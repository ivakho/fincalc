# 💰 Finance Tracker

A simple application for tracking personal finances — incomes and expenses — with category-based organization.

## 🌐 Live Demo

The application is available on GitHub Pages:

👉 https://ivakho.github.io/fincalc/

## 🚀 Features

- 📊 Track **income and expense transactions**
- 🗂️ Manage **categories**
- 🔄 Full **CRUD operations**:
  - Create, Read, Update, Delete **transactions**
  - Create, Read, Update, Delete **categories**
- 📅 Filter transactions by date range
- 📈 Get totals for:
  - Income per category
  - Expense per category

---

## 🏗️ Tech Stack

- React
- TypeScript
- React Router
- TanStack Query
- Mantine UI

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ivakho/fincalc.git
cd fincalc
```

### 2. Configure .env
Create a `.env` file in the frontend root:

```
VITE_BACKEND_URL = [your-backend-url]
```

### 3. Setup Frontend

```bash
npm install
npm run dev
```

### 4. Setup Backend

You can use my backend server with database, just follow the steps in the backend repo:
https://github.com/ivakho/finance

---

## 📌 Notes

- Positive transaction amount = **income**
- Negative transaction amount = **expense**
- Categories are shared between both types