import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QrPoster from './QrPoster.jsx'

const normalizedPath = window.location.pathname.replace(/\/+$/, '')
const isQrPoster = normalizedPath.endsWith('/qr')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isQrPoster ? <QrPoster /> : <App />}
  </StrictMode>,
)
