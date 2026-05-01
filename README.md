# Kekyaa Cake Ordering Website

A modern, responsive single-page marketing and ordering website for **Kekyaa Cakery** built with React.

This project showcases the brand, menu offerings, product gallery, intro media, and direct social/contact pathways (including WhatsApp) to help customers discover and place cake orders quickly.

---

## ✨ Features

- Responsive, section-based landing page experience
- Sticky navigation with mobile overlay menu
- Hero/header section with call-to-action
- Product/menu showcase driven by centralized constants
- Intro media section with video play/pause controls
- Social/contact-focused footer (Instagram, TikTok, WhatsApp, Threads)
- Reusable component and container structure for scalability

---

## 🧰 Tech Stack

- **Framework:** React 19
- **Build Tooling:** Create React App (`react-scripts`)
- **UI:** CSS modules by feature folder + reusable global styles
- **Icons:** `react-icons`
- **Testing Libraries:** React Testing Library + Jest DOM

---

## 📁 Project Structure

```text
.
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/            # Images, video, and brand assets
│   ├── components/        # Reusable UI components (Navbar, Footer blocks, etc.)
│   ├── constants/         # Centralized data and asset exports
│   ├── container/         # Page sections (Header, About, Menu, Gallery, etc.)
│   ├── App.js             # Main page composition
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended)
- **npm** 9+

### Installation

```bash
npm install
```

### Run in development

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## 🧪 Available Scripts

In the project directory, you can run:

- `npm start` – Runs the app in development mode.
- `npm run build` – Builds the app for production to the `build/` folder.
- `npm test` – Launches the test runner in interactive watch mode.
- `npm run eject` – Ejects CRA configuration (**irreversible**).

---

## 🏗️ Production Build

Create an optimized production bundle:

```bash
npm run build
```

The output will be generated in the `build/` directory and is ready to be deployed to any static hosting provider.

---

## 🌐 Deployment Notes

You can deploy this project on platforms like:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

General deployment flow:

1. Run `npm run build`.
2. Deploy the generated `build/` folder.
3. Configure your host to serve `index.html` for SPA routes when needed.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

## 📄 License

This project is currently private/proprietary unless otherwise stated by the repository owner.

---

## 👩‍🍳 Brand

Built for **Kekyaa Cakery** — freshly crafted cakes made with passion.