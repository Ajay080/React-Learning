// import { useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './App.css'
// import Home from './components/Home'
// import Contact from './components/Contact'
// import HelpDesk from './components/HelpDesk'
// import About from './components/About'  
// import Layout from './components/Layout'
// import User from './components/User'

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//        <Routes>
//           <Route path="/" element={<Layout/>}>
//               <Route path="home" element={<Home/>}/>
//               <Route path="helpdesk" element={<HelpDesk/>}/>
//               <Route path="user/:userID" element={<User/>}/>
//               <Route path="about" element={<About/>}/>
//               <Route path="contact" element={<Contact/>}/>
//           </Route>
//        </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home, {WelcomeHome} from './components/Home'
import Contact from './components/Contact'
import HelpDesk from './components/HelpDesk'
import About from './components/About'  
import Layout from './components/Layout'
import User from './components/User'

function App() {


  const BrowserRouter= createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[ // it is like outlet
        {
          path:'home',
          element:<Home/>,
          loader:() => WelcomeHome() //loader returns the promises // call the ajax
      },
      {
        path:'helpdesk',
        element:<HelpDesk/>
      },
      {
        path:'user/:userID',
        element:<User/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>,
        
      }
    ]
  }
])
  return (
    <RouterProvider router={BrowserRouter}/>
  )
}

export default App
