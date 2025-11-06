# Tic-Tac-Toe Game

Welcome to the Multi-Board Tic-Tac-Toe game! This is a React application that allows you to play Tic-Tac-Toe on six different boards simultaneously.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Play Tic-Tac-Toe on six separate boards at the same time
- Real-time game status display for each board (Winner, Draw, or In Progress)
- Individual board reset functionality
- Global reset to restart all boards
- Responsive design that works on different screen sizes
- Clean and intuitive user interface

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- CSS3 - For styling and layout

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository or download the source code
2. Open your terminal/command prompt
3. Navigate to the project directory:
   ```bash
   cd tik-tac-toe
   ```
4. Install the required dependencies:
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

## How to Play

1. Open the application in your browser
2. You'll see six Tic-Tac-Toe boards arranged in a grid
3. The top section shows the current status of each board
4. Click on any square to place your mark (X or O)
5. Players take turns automatically - X goes first, then O, then X again, etc.
6. The first player to get 3 of their marks in a row (up, down, across, or diagonally) wins
7. When a board is finished, you can reset it individually or reset all boards at once

## Project Structure

```
tik-tac-toe/
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point of the application
│   ├── index.css      # Styling for the application
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
