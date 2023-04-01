import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeState from './Context/Theme/ThemeState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeState>
    <App />
    </ThemeState>
    </BrowserRouter>
  </React.StrictMode>,
)
