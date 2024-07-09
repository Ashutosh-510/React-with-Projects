import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/about.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
//import Github from './Components/Github/Github.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'


// It is an very Good approach to label routes and showing data 
//but we can also use some more easy aproach than this one
/* const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: "",
        element:<Home/>,
      },{
        path: "about",
        element : <About/>
      },{
        path:"Contact",
        element : <Contact/>
      }
    ]
  }
]) */

// New Approach
//It is using built in functions of react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      //This loader is used to reduce lagging time of displaying  fetching data from the api
      // It help us to make and showing fetch data faster as compared to traditional useeffect hook implementation
      
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}
       />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
