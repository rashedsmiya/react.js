import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './components/pages/Home.jsx'
import './index.css' 


let root=document.getElementById('root')
createRoot(root).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
