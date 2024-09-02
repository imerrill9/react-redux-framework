# Modern React Framework

## Overview

This project is a modern React application that leverages latest technologies and best practices for state management, API interactions, UI design, and routing. It's built to be a small example of technologies I prefer to use for a react UI website and can be expanded upon as needed.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: The official, opinionated toolset for efficient Redux development.
- **RTK Query**: A powerful data fetching and caching tool built into Redux Toolkit.
- **Material UI**: A comprehensive suite of UI tools and components for React.
- **React Router DOM**: Declarative routing for React applications.

## Key Features

- **Efficient State Management**: Utilizes Redux Toolkit for centralized state management, reducing boilerplate and simplifying complex state logic.
- **Optimized API Interactions**: Implements RTK Query for efficient data fetching, caching, and state updates.
- **Responsive UI Design**: Leverages Material UI components and theming for a consistent, modern, and responsive user interface.
- **Declarative Routing**: Uses React Router DOM for seamless navigation and URL-based rendering.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Project Structure

```
src/
├── api/
├── components/
├── redux/
├── App.js
```

- `api/`: Registers all API calls using RTK Query
- `components/`: Screens and reusable components
- `redux/`: configures redux store and defines reducers
- `App.js`: Main app component where routes are registered

## Usage

The main page at localhost:3000 shows and example of making a call to a free API using RTK Query, displaying the data in a Material UI Card. The login link on the toolbar navigates to a login screen which is an example of saving a username into the redux store. The user is then persisted and shown on any page as an example.
