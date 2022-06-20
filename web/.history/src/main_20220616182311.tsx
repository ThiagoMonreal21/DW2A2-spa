import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Ghost } from './components/Ghost';
import { Music } from './components/Music';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Music />
    <Ghost />
  </React.StrictMode>
)
