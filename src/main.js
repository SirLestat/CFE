import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const reactAppNode = document.getElementById('react-app');
const root = createRoot(reactAppNode);

root.render(<App />);
