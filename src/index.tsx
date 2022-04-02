import { StrictMode } from 'react'
import * as ReactDOMClient from 'react-dom/client'

import 'bootswatch/dist/yeti/bootstrap.min.css'
import './index.css'

import { App } from './App'

const rootElement = document.getElementById('root')!
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
