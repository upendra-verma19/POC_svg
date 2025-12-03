# Minimal SVG Rendering Performance POC

This project demonstrates three SVG rendering modes in a React + Vite frontend, with a Node.js + Express backend using SVGO for optimization. The goal is to show how to reduce SVG rendering latency for heavy diagrams.

## Features

- **Direct Inline SVG**
- **Optimized SVG (SVGO via backend)**
- **Lazy Loaded SVG (IntersectionObserver)**
- Dropdown to select rendering mode
- Render button
- Render time display

## Tech Stack

- React + Vite (frontend)
- Node.js + Express (backend)
- SVGO for SVG optimization

## Folders

- `/svg/` - Raw SVGs
- `/optimized/` - Optimized SVGs

## Backend API

- `GET /api/optimized/:name` - Returns optimized SVG

## How to Run

1. Install dependencies in both frontend and backend folders
2. Start backend server
3. Start frontend (Vite) dev server

## Usage

1. Select rendering mode
2. Click "Render SVG"
3. View render time

---

## Start- Frontend
- cd frontend
- npm install
- npm run dev

## Start - Backend
-cd backend
-npm install
-node index.js / npm start


 ## Images-
 
<img width="999" height="812" alt="image" src="https://github.com/user-attachments/assets/8b4480f5-f38e-4de8-b2c6-2c48bd27e55f" />
<img width="952" height="776" alt="image" src="https://github.com/user-attachments/assets/d106c8f9-a296-445e-9785-d3afd57cf31e" />
<img width="798" height="774" alt="image" src="https://github.com/user-attachments/assets/6aca29c3-9a2a-4dd3-b292-82e208d81e55" />



This POC is intentionally minimal for easy explanation and review.
