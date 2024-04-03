import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello from './App2.jsx'
let reactelement=React.createElement(
  'a',
  {href:'https://www.google.com/',target:'_blank'},
  'GOOGLE'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactelement
  
)
