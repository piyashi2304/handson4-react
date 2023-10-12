import React from 'react'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
function RouterCompo(){
    return(
        <>
        <BrowserRouter>
        <div className='link'>
        <Link  to='/' style={{textDecoration:"none", color:"white"}}>Home</Link>
        <Link to='/student' style={{textDecoration:"none", color:"white"}}>Student</Link>
        <Link to='/contact' style={{textDecoration:"none", color:"white"}}>Contact Us</Link>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/contact' element={<Contact />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouterCompo