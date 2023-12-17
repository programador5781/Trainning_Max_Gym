import { Routes, Route } from 'react-router-dom';
import { Landing } from './views/Landing/Landing';
import { Home } from './views/Home/Home';
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
