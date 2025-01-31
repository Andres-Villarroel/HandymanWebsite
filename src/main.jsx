import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //the element with the id of 'root' is found in index.html.
  <StrictMode>
    <App />
  </StrictMode>,
)
