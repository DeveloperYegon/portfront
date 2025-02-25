import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import BlogsPage from './Pages/BlogsPage'
import Blog from './Pages/Blog'
import Notifications from './Pages/Notifications'
import Donate from './Pages/Donate'
import ALogin from './Admin/ALogin'
import ABlog from './Admin/ABlog'
import ANotifications from './Admin/ANotifications'
import ARecruit from './Admin/ARecruit'

function App( ) {

  return (
    <div className='bg-[#182B5C]'>     
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/donate' element={<Donate/>} />

            {/* <Route path='/projects' element={<ProjectPage/>}/>
            <Route path='/project' >
                <Route path=':projectId' element={<Project/>}/>
            </Route> */}
            <Route path='/blogs' element={<BlogsPage/>}/>
            <Route path='/blog' >
                <Route path=':blogId' element={<Blog/>}/>
            </Route>
            <Route path='/notify' element={<ANotifications/>}/>
           <Route path='/add-blog' element={<ABlog/>}/>
           <Route path='/add-admin' element={<ARecruit/>}/>
           <Route path='/login' element={<ALogin/>}/>
           
           
           
          </Routes>
          <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App