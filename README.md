
# 🌐 Personal Portfolio — React.js

A modern, responsive personal portfolio website built with **React.js** and **Vite**, featuring smooth scroll navigation and dedicated sections for showcasing skills, projects, and contact information.

---

## 🚀 Live Demo

👉 [View Portfolio](https://agnusjose.github.io/Portfolio/)

---

## ✨ Features

- ⚡ Single-page application with smooth scroll navigation
- 🧭 Fixed Navbar with section-aware scrolling (offset for navbar height)
- 🏠 **Home** — Hero/landing section
- 👤 **About** — Personal introduction and background
- 🛠️ **Projects** — Showcase of work and projects
- 💡 **Skills** — Technical skills display
- 📬 **Contact** — Contact form / details
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI framework |
| Vite | Build tool |
| React Router DOM | Client-side routing |
| CSS | Styling & layout |
| GitHub Pages | Deployment |
| gh-pages | Deploy automation |

---

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/agnusjose/Portfolio.git

# Navigate into the project
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📦 Deployment (GitHub Pages)

This project is deployed using **gh-pages** with **Vite**.

### Key Configuration

**vite.config.js** must include the `base` path:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
```

**package.json** includes:

```json
"homepage": "https://agnusjose.github.io/Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## 📬 Contact

Feel free to reach out via the **Contact** section on the portfolio or connect on:

- GitHub: [@agnusjose](https://github.com/agnusjose)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
