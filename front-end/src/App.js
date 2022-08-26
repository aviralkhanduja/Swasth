import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Poses from './pages/Poses/Poses';
import About from './pages/About/About';
import Help from './pages/Help/Help';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import News from './pages/NewsFeed/NewsFeed';
export default function App() {
  return (
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<News/>}/>
        <Route path='/Poses' element={<Poses />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Help' element={<Help />} />
      </Routes>
    </Router>
  )
}


