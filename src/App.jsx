import React from 'react' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Activity from './pages/activity'
import AuthorProfile from './pages/authorProfile'
import Authors from './pages/authors'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Create from './pages/create'
import Explore from './pages/explore'
import Home from './pages/home'
import ItemDetails from './pages/itemDetails'
import LogIn from './pages/logIn'
import SignUp from './pages/signUp'
import Wallet from './pages/wallet'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}>
        </Route>
        <Route path='/sign-up' element={<SignUp/>}>
        </Route>
        <Route path='/home' element={<Home/>}>
        </Route>
        <Route path='/explore' element={<Explore/>}>
        </Route>
        <Route path='/activity' element={<Activity/>}>
        </Route>
        <Route path='/blog' element={<Blog/>}>
        </Route>
        <Route path='/authors' element={<Authors/>}>
        </Route>
        <Route path='/usuarios/:id' element={<AuthorProfile/>}>
          <Route path=':id' element={<AuthorProfile/>}/>
        </Route>
        <Route path='/item-details' element={<ItemDetails/>}>
        </Route>
        <Route path='/contact' element={<Contact/>}>
        </Route>
        <Route path='/wallet' element={<Wallet/>}>
        </Route>
        <Route path='/create' element={<Create/>}>
        </Route>
       
      </Routes>
    </BrowserRouter>

    // <div className="App"> 
    //   {/* <Home /> */}
    //   {/* <Explore /> */}
    //   {/* <Activity /> */}
    //   {/* <Blog/> */}
    //   {/* <Authors/> */}
    //   {/* <Contact/> */}
    //   {/* <Wallet/>  */}
    //   {/* <Create/> 
    //   {/* <LogIn/>  */}
      //  <AuthorProfile/>  
    //   {/* <ItemDetails/>  */}
    //   {/* <SignUp/>  */}
    // </div>
  )
}

export default App
