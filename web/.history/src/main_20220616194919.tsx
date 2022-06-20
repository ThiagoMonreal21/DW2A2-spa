import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Lyrics } from './components/lyrics';
import { Music } from './components/Music';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Music />
    <Lyrics />
  </React.StrictMode>
)
