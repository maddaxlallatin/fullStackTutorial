import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';

import Recipes from './components/Recipes'; // Fix the file name to match the actual file name
// @ts-ignore
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-softwhite'>
        <Header />
        <SearchBar />
        <SideBar />
        <Recipes />
      </div>
    </>
  )
}

export default App
