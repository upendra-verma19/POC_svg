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
 


This POC is intentionally minimal for easy explanation and review.
