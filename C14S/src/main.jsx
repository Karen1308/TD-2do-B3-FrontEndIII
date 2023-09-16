import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter'
import Display from './Display'
import CounterProvider from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<CounterProvider>
  <Counter/>
  <Display/>
</CounterProvider>
)
