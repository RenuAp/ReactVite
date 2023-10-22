import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RouteLayout from './components/RouteLayout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Contact from './components/Contact'
import { GithubLoader } from './components/Github/Github.jsx'
import Link1 from './components/Link/Link1'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <RouteLayout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path : "about",
//         element : <About/>

//       },
//       {
//         path : "contact",
//         element : <Contact/>

//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<RouteLayout/>}>
      <Route path="" element = {<Home/>}/>
      <Route path="about" element = {<About/>}>
      <Route path="link1" element={<Link1/>}/>
      </Route>
      <Route path="contact" element = {<Contact/>}/>
      <Route path="user/:userid" element = {<User/>}/>
      <Route 
      loader={GithubLoader}
        path="github"   
        element = {<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
