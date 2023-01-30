import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Poses from './pages/Poses/Poses';
import About from './pages/About/About';
import Help from './pages/Help/Help';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import News from './pages/NewsFeed/NewsFeed';
import {StyledContainer} from './components/Styles';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Feedback from './pages/Feedback';
/*appuser?<Navigate to="/dashboard" ></Navigate>:
:<Navigate to="/login"></Navigate>
*/
export default function App() {
  const [appuser,setAppUser]=useState("");
  const [appPose,setAppPose]=useState("");
  console.log('APPUSER=',appuser,"APPPOSE=",appPose);
  return (
    <Router>
      <StyledContainer>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setAppUser={setAppUser}/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Poses' element={<div><Navbar></Navbar><Poses setAppPose={setAppPose}/></div>}/>
        <Route path='/About' element={<div><Navbar></Navbar><About /></div>}/>
        <Route path='/Help' element={<div><Navbar></Navbar><Help /></div>}/>
        <Route path='/News' element={<div><Navbar></Navbar><News /></div>}/>
        <Route path='/feedback' element={<div><Navbar></Navbar><Feedback appPose={appPose}/></div>}/>
      </Routes>
      </StyledContainer>
    </Router>
  );
}
/*
<Route path='/signup' element={<Signup />} />
<Router>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<News/>}/>
        <Route path='/Poses' element={<Poses />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Help' element={<Help />} />
      </Routes>
</Router>
*/


