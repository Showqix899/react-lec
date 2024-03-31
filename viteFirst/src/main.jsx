import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello from './App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello/>
    
  </React.StrictMode>,
)
