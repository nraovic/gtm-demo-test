import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import TagManager from 'react-gtm-module'

const env = process.env.NODE_ENV

const tagManagerArgs = {
  gtmId: '<your GTM ID>',
  dataLayer: {
    userId: '001',
    userProject: 'project',
  },
  //the below changes GTM values based on whether dev or production
  auth: env === 'development' ? '<dev ga_auth>' : '<live ga_auth>',
  preview: env === 'development' ? '<dev ga_env>' : '<live ga_env>',
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
