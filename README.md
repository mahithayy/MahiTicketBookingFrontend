# Ticket Booking System (Frontend)

## Overview
A responsive, modern React application that serves as the user and admin interface for the Ticket Booking API. It provides an intuitive UI for creating shows, browsing available events, and interactive seat selection with real-time feedback .

---

## Tech Stack
* **Framework:** React.js
* **Language:** TypeScript
* **Routing:** React Router DOM (`react-router-dom`)
* **State Management:** React Context API
* **HTTP Client:** Axios
---

## Key Features

###  Admin Features
* **Dashboard (`/admin`):** A dedicated route for administrators to create new shows or events.
* **Show Creation:** Form to input Show Name, Start Time, and Total Seats . Triggers backend bulk seat generation.

###  User Features
* **Show Catalog (`/`):** Displays a list of all available shows utilizing the Context API to prevent redundant fetching.
* **Interactive Booking (`/booking/:id`):** * Visual seat grid indicating `AVAILABLE`, `SELECTED`, and `BOOKED` statuses .
  * Direct DOM interaction for highlighting selected seats prior to confirmation.
  * One-click bulk booking submission.
* **Graceful Error Handling:** Provides user-friendly `alert()` feedback for successful bookings, API failures, or concurrency conflicts.

---

## Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
API Configuration:
The base URL for the backend API is configured in src/api/api.ts. Update the baseURL if running the backend locally:TypeScriptconst API = axios.create({
  baseURL: "http://localhost:3000/", // Change to your deployed backend URL for production
});
Start the development server:Bashnpm run dev
Application Structure & State ManagementGlobal State (AppContext): Manages the core shows array and application loading state . This centralizes data fetching and ensures components only re-render when necessary, fulfilling the requirement for efficient API usage.Component Architecture: Separated cleanly into pages/ (Home, Admin, Booking), context/ (AppProvider), and api/ (Axios service layer) for modularity and maintainability.