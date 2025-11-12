# Todo List App

Welcome to the Todo List App! This is a simple and intuitive task management application built with React.js that helps you keep track of your daily tasks.

## Features

- Add new tasks to your todo list
- Mark tasks as completed
- Delete tasks you no longer need
- Clean and responsive user interface
- Real-time updates as you manage your tasks
- Works on both desktop and mobile devices

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- CSS3 - For styling and layout

## Getting Started

### Prerequisites

You need to have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. Open your terminal/command prompt
2. Navigate to the todo-list directory:
   ```bash
   cd todo-list
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start and you can view it in your browser at `http://localhost:5173` (or the next available port if 5173 is in use).

To build the application for production, run:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

## How to Use

1. Open the application in your browser
2. You'll see a clean interface with:
   - An input field to add new tasks
   - An "Add" button to submit tasks
   - A list of your current tasks
3. Type a task in the input field and click "Add" or press Enter
4. Click on any task text to mark it as completed (it will show a strikethrough)
5. Click the "Delete" button next to any task to remove it from the list
6. Your tasks will persist until you delete them or refresh the page

## Project Structure

```
todo-list/
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point of the application
│   ├── App.css        # Styling for the application
│   └── index.css      # Global styling
├── index.html         # Main HTML file
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration
```

## Contributing

This project is designed as a learning exercise. If you'd like to contribute:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
