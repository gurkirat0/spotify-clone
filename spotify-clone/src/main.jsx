import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
        <App />
    </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
// This code sets up a React application with routing capabilities using BrowserRouter. It imports necessary styles and components, and renders the main App component into the root element of the HTML document.