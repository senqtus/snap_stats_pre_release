import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './output.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <link href="./output.css" rel="stylesheet"></link>
    <App />
  </StrictMode>,
)
