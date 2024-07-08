import React from "react"
import ReactDOM  from "react-dom/client"

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import { HashRouter,Route,Routes } from "react-router-dom"

export default function App()
{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="menu" element={<Menu />} />
            <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
                 </Route>
      </Routes>
    </HashRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)