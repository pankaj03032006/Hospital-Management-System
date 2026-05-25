// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageRoutes from './PageRoutes';

function App() {
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;