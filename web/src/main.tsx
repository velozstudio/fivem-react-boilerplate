import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'

import DisplayWrapper from './app/display-wrapper'
import Layout from './app/layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DisplayWrapper>
      <Layout />
    </DisplayWrapper>
  </React.StrictMode>
)
