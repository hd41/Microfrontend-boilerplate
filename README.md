# Microfrontend Boilerplate

This is a boilerplate for a **Micro-Frontend** application. It consists of a host React application and two micro React applications, demonstrating how to build and integrate micro-frontends using React.


## Features

- **React 18**: Uses the latest React features.
- **Micro-Frontend Architecture**: Demonstrates how to split a large application into smaller, independently deployable micro-apps.
- **Module Federation**: Uses Webpack's Module Federation plugin for seamless integration of micro-apps.
- **Scalable Structure**: Designed to scale with additional micro-apps.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or later is recommended).
- **npm** or **yarn**: Package manager for installing dependencies.

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Micro-Frontend
```

### 2. Install Dependencies

```bash
npm install
cd microApp1
npm install
cd ../microApp2
npm install
```

### 3. Run the Applications

```bash
# Start the host app
cd hostApp
npm start

# Start microApp1
cd ../microApp1
npm start

# Start microApp2
cd ../microApp2
npm start
```

### 4. Accessing the Application

- Open your browser and navigate to http://localhost:3000 (or the port specified for the host app).

- The host app will load and display the micro-apps.