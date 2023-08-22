import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TradingViewWidget from './Demo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <TradingViewWidget />
  </React.StrictMode>,
)
