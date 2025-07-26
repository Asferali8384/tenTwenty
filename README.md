## Project Overview

This project allows users to log in and add notes in real-time, with all data securely stored in the database. Routes are protected with authentication, ensuring users can only access their own notes and cannot view others’ data. Unauthorized users cannot access protected URLs.

The UI is simple but functional, with some responsiveness built in. The dashboard dynamically calculates weeks based on the data. A few minor features are still pending due to time constraints.

## About Me

I am a certified MERN stack developer with experience as a software developer, primarily focused on frontend development. During my previous role at Urbanrise Const Pvt Limited, one of South India's largest companies, I contributed to product development and earned recognition for implementing innovative ideas.

My skills span frontend design and development, with intermediate proficiency in Figma, which helps streamline the design-to-development process. I also possess backend and database knowledge, enabling me to work effectively across the full stack.

Currently, I am expanding my expertise in product design while continuing to deliver high-quality frontend solutions. I prefer a practical, results-oriented approach over flashy presentations without substance, focusing on meaningful impact and clear communication.

## Important Note

If you haven’t read the above, I’m simply sharing what has happened and what I’ve done in my past work. Every experience in my resume and projects has a real story behind it. If things go well, we can meet and have a detailed conversation soon.

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
- Post Man Link - https://martian-robot-496005.postman.co/workspace/Team-Workspace~6de5bd93-27bf-4d69-8b7b-1fe94007fca7/request/32018086-32635c1d-5689-40d8-94e2-98ddb21b5751
