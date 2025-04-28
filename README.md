Menter Bot Project 
Overview

Menter Bot is a web-based learning platform built using React.js, allowing users to enroll in various courses, download study materials, and access educational resources similar to popular platforms like Udemy.


**Overview**
------------

**Menter Bot** is a web-based learning platform built using **React.js**, allowing users to enroll in various courses, download study materials, and access educational resources similar to popular platforms like **Udemy**.

**Features**
------------

*   **User authentication and enrollment system**
*   **Course catalog with filtering and sorting capabilities**
*   **Study material download functionality**
*   **Profile management for users to track their progress**

**Technical Requirements**
-------------------------

*   **Node.js (v16 or later)** for server-side development
*   **Express.js (v4 or later)** for building the API
*   **React.js (v18 or later)** for client-side development
*   **MongoDB (v5 or later)** for database management
*   **Material-UI** for styling and layout

**Installation**
---------------

### Step 1: Clone the Repository

Clone the **Menter Bot** project repository using **Git**:

```bash
git clone https://github.com/your-username/menter-bot.git](https://github.com/Shruti2003D/decrypt0
```

### Step 2: Install Dependencies

Navigate to the project directory and install the required dependencies using **npm** or **yarn**:

```bash
cd menter-bot
npm install

```

### Step 3: Start the Development Server

Start the development server using **npm** or **yarn**:

```bash
npm start

```

This will start the **React** development server and make the application available at **http://localhost:3000** in your web browser.

### Step 4: Start the API Server

To start the API server, navigate to the **server** directory and run the following command:

```bash
cd server
npm start

```

This will start the **Express.js** API server and make it available at **http://localhost:5000** in your web browser.

**API Endpoints**
-----------------

*   **User Endpoints**
    *   `POST /api/users/signup`: Create a new user account
    *   `POST /api/users/login`: Login an existing user account
    *   `GET /api/users/profile`: Retrieve the current user's profile information
*   **Course Endpoints**
    *   `GET /api/courses`: Retrieve a list of available courses
    *   `GET /api/courses/:id`: Retrieve a specific course by ID
    *   `POST /api/courses/enroll`: Enroll a user in a course
*   **Study Material Endpoints**
    *   `GET /api/study-materials/:courseId`: Retrieve study materials for a specific course

**Database Schema**
-------------------

The project uses a **MongoDB** database with the following schema:

*   **Users**
    *   `_id`: Unique user ID
    *   `username`: User username
    *   `email`: User email address
    *   `password`: User password (hashed)
*   **Courses**
    *   `_id`: Unique course ID
    *   `title`: Course title
    *   `description`: Course description
    *   `studyMaterials`: Array of study material IDs
*   **Study Materials**
    *   `_id`: Unique study material ID
    *   `courseId`: Foreign key referencing the course ID
    *   `fileName`: Study material file name
    *   `fileContent`: Study material file content (base64 encoded)

**Future Development**
----------------------

*   **Implement payment gateway for course enrollments**
*   **Add instructor profiles and ratings**
*   **Integrate with social media platforms for user authentication**
*   **Develop a mobile app for the learning platform**

**Contributors**
---------------

*   **Shruti Dhumal**
*   **Shrutika jadhav**
*   **Mohanish Khambadkar**
*   **Om Jangade**




