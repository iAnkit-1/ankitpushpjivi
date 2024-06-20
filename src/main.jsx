import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from "./components/Contact";
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: '/',
//         element: <Hero/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/skills',
//         element: <Skills/>
//       },
//       {
//         path: '/projects',
//         element: <Projects/>
//       },
//       {
//         path: '/contact',
//         element: <Contact/>
//       },
//     ],
//   },
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>,
)
