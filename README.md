# Kanban Board Project

## Overview

The Kanban Board project is a task management system with CRUD (Create, Read, Update, Delete) functionality. It allows users to manage tasks by creating, updating, deleting, and moving them across different status columns (To Do, On Progress, Done). The frontend is built using React.js, while the backend is developed using Node.js and Express.js, with a MongoDB database for storage.

## Key Features

- **Task Creation**: Users can create tasks with attributes such as title, description, status (To Do, In Progress, Completed), and date/time.
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on tasks.
- **Status Management**: Move tasks between different status columns.
- **Interactive Interface**: React.js frontend for seamless task management.
- **Edit Functionality**: Users can edit tasks via a modal interface, allowing updates to the task title, description, and status.
- **Responsive Design**: Ensures a user-friendly experience across different devices.

## Installation

### Clone the repository:

```sh
git clone https://github.com/TusharKesarwani/kanban-board.git
```

### Navigate to the project directory:

```sh
cd kanban-board
```

## Backend Setup

### Navigate to the backend directory:

```sh
cd kanban-backend
```

### Install dependencies:

```sh
npm install
```

### Set up MongoDB:

1. Ensure MongoDB is installed and running on your machine.
2. Update the MongoDB connection string in `index.js` if necessary.

### Start the backend server:

```sh
node index.js
```

The backend server will run at http://localhost:5000.

## Frontend Setup

### Navigate to the frontend directory:

```sh
cd ..
```

### Install dependencies:

```sh
npm install
```

### Start the frontend server:

```sh
npm start
```

The frontend will run at http://localhost:3000.

## Usage

1. Open your browser and navigate to http://localhost:3000.
2. Add new tasks by entering the task title and description, then click "Add Task".
3. Tasks will appear in the "To Do" column. Move tasks between columns by editing their status.
4. Edit or delete tasks using the respective buttons on each task card.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Libraries**: Axios (for API requests), React Modal (for task editing)

## Credits

This project was created by [Tushar Kesarwani](https://github.com/TusharKesarwani) as a task management system inspired by the Kanban methodology.
