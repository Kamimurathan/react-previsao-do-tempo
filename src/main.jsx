import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Page/App'
import GlobalStyle from './styles/globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
)
