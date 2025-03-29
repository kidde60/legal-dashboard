# Legal Practice Management Dashboard

## Project Overview

The **Legal Practice Management Dashboard** is a responsive web application designed to help legal firms manage their cases, documents, and billable hours. Built using **TypeScript, Redux Toolkit, and Tailwind CSS**, this dashboard offers role-based access control and a simulated API for data interactions.

## Features

### Dashboard UI

- **Case Summary Widget**: Displays counts of active, pending, and closed cases.
- **Recent Documents Widget**: Lists the latest uploaded legal documents with version details.
- **Time Tracking Widget**: Shows billable hours per attorney.
- **Navigation Sidebar**: Provides role-based menu items.
- **Header with Profile Dropdown**: Allows user profile overview and Logout.

### Authentication & Authorization

- **Admin User**: `admin@legaltech.com / admin123` (Full access to all features)
- **Standard User**: `user@legaltech.com / user123` (Restricted access)
- Protected routes based on user role.
- Login screen with validation.

### API Simulation

- Mock API services return fake data.
- Implemented loading states while fetching data.
- Simulated error states with proper handling and user feedback.

## Setup Instructions

### Prerequisites

Ensure you have Node.js installed (recommended version 18 or later).

### Installation

```sh
# Clone the repository
git clone https://github.com/your-repo/legal-dashboard.git
cd legal-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be accessible at `http://localhost:5173/`

## Technical Decisions & Architecture

### Technologies Used

- **TypeScript**: Ensures type safety and maintainability.
- **Redux Toolkit**: Manages global state efficiently.
- **Tailwind CSS**: Provides a utility-first styling approach.
- **React Testing Library & Vitest**: For unit testing.

### Folder Structure

```sh
src/
├── components/      # UI components
├── redux/           # Redux slices for state management
├── pages/           # TypeScript.txs pages
├── services/        # Mock API services
├── routes/          # Protected Routes
├── types/           # TypeScript types
├── shared/          # Shared/Reusable components
└── tests/           # Unit tests
```

### State Management

- **Redux Toolkit** is used to manage application state.
- **Slices** handle different sections like authentication, case data, and documents.

### Authentication & Authorization

- Role-based UI elements are implemented.
- Protected routes restrict access based on user roles.

### API Handling

- Uses mock services with fake data.
- Simulates network delay, errors, and loading states.

## Assumptions

- The application is designed for **desktop use only**.
- No actual backend integration; all data is mock data.
- Authentication is simulated; no real authentication logic.
- Only minimal CRUD operations are included for demonstration.

## Testing

- **Unit tests** cover key components and Redux state.
- **Vitest** and **React Testing Library** are used.
- Run tests with:

```sh
npm run test
```

## Future Improvements

- Implement real API integration.
- Add mobile responsiveness.
- Extend role-based access control with more granular permissions.
- Implement case and document management CRUD operations.

## Repository

Find the code on GitHub: [GitHub Repository](https://github.com/your-repo/legal-dashboard)

---

This project was built as part of a UI challenge, demonstrating best practices in **React, TypeScript, Redux, and Tailwind CSS**. 🚀
