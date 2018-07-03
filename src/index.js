import React from 'react'
import reactDom from 'react-dom'

import './styles/index.scss'

import {App} from './app'

reactDom.render(
  <App />,
  document.getElementById('app')
)
