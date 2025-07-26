## Project Overview

This project is a **Time Sheet Management App** built with a modern tech stack and designed for efficiency and scalability.

## Folder Structure

src/
├── app/
│ ├── api/ # API route handlers
│ ├── components/ # Reusable UI components
│ └── pages/ # Next.js pages (if used)
├── components/ # More reusable components (shared globally)
├── lib/ # Utilities and helpers
│ └── mongodb.js # MongoDB connection setup
├── models/ # Mongoose schemas and models
│ ├── userSchema.js # User schema
│ └── notesSchema.js # Notes schema
└── redux/ # Redux Toolkit slices and API handling
└── apiSlice.js # API calls and queries management


## Tech Stack

- **Next.js** – Full-stack React framework for both frontend and backend development  
- **MongoDB** – NoSQL database for storing user and timesheet data  
- **Tailwind CSS** – Utility-first CSS framework for styling  

## Dependencies Used

| Dependency       | Purpose                                          |
| ---------------- | -----------------------------------------------|
| **Redux Toolkit**  | Simplifies API handling and state management    |
| **bcrypt**         | Password hashing for secure authentication      |
| **date-fns**       | Date formatting and conversion                   |
| **dotenv**         | Environment variable management                   |
| **jsonwebtoken**   | JWT token generation for user authentication     |
| **lucide-react**   | React icons for UI components                     |
| **mongoose**       | MongoDB object modeling and schema management    |
| **notistack**      | Notification system for displaying toast messages|

## API Testing

- Use **Postman** to test backend API endpoints.
