import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='App' style={{ backgroundImage: "url(/bank.jpg)" }}>
        <AllRoutes />
      </div>


    </>
  )
}

export default App
