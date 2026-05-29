import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Note from './components/Note'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black
      p-4 rounded-xl'>Tailwind test</h1>
      <Note username="chai aur code"  btnText="click me "/>
      <Note username="Ranjana" btnText="click" />
      
    </>
  )
}

export default App
