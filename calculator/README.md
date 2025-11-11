# Calculator App

Welcome to the Calculator App! This is a simple yet powerful calculator built with React.js that shows your calculations as you perform them.

## Features

- Basic arithmetic operations: addition (+), subtraction (-), multiplication (×), division (÷)
- Percentage calculations
- Decimal number support
- Clear function to reset the calculator
- Visual display of calculations (e.g., "3 × 2 = 6")
- Responsive design that works on both desktop and mobile devices

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
2. Navigate to the calculator directory:
   ```bash
   cd calculator
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

The application will start and you can view it in your browser at `http://localhost:5175` (or the next available port if 5175 is in use).

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
2. You'll see a calculator interface with:
   - A history display showing your calculations
   - A main display showing the current number
   - Buttons for numbers, operations, and functions
3. Click on number buttons to input values
4. Click on operation buttons (+, -, ×, ÷) to perform calculations
5. Click the "=" button to see the result
6. The history display will show your calculations in real-time (e.g., "3 × 2 = 6")
7. Click "AC" to clear everything and start over
8. Click "%" to convert the current number to a percentage

## Project Structure

```
calculator/
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
