import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create the root React node and render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode helps find potential problems in the app */}
    <App />
  </StrictMode>,
)
