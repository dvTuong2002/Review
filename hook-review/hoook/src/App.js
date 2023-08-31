import React from 'react'
import DemoUseState from './components/DemoUseState'
import DemoUseEffect from './components/DemoUseEffect'

export default function App() {
  return (
    <div className='container border border-primary my-5'>
      <h1 className='text-center'>Hook Review</h1>
      <hr/>

      <DemoUseState />
      <br/>
      <br/>
      <DemoUseEffect />
    </div>
  )
}
