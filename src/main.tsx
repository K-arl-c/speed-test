import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import test from './typeTest.tsx'
import GenerateParagraph from './typeTest.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GenerateParagraph />
  </StrictMode>,
)
