import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'

import './App.css'

function App() {
  const [note, setNote] = useState(0);
  const noteArray: string[] = ['E', 'A', 'D', "G", "B", "E"];

  return (
    <div>
      <h1 className='note'>{noteArray[0]}</h1>
      <div className = 'icon'>
      <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} />
      <FontAwesomeIcon className='arrow' icon={faCircleArrowLeft}/>
      </div>
    </div>
  )
}

export default App
