import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './components/pages/Home.jsx'
import './index.css' 
import Footer from './components/common/Footer.jsx'
import Header from './components/common/Header.jsx'


let root=document.getElementById('root')
createRoot(root).render(
  <>
    <Header />
    <Home />

    <Footer />
  </>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
