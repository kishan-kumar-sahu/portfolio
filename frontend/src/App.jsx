
import { BrowserRouter, Routes , Route } from "react-router-dom";


import  "./App.css"

import Navbar from "./Navbar";
import Home from "./components/home"
import About from "./components/about";
import Contact from "./components/contact"
import Projects from "./components/projects"
import Resume from "./components/Resume"

import Skill from "./components/skills"
function App(){


  return(<>

<BrowserRouter>
  <Navbar></Navbar>
 <Routes>
  <Route  path="/" element={<Home></Home>}></Route>
   <Route  path="/about" element={<About></About>}></Route>
   <Route   path="/contact"  element={<Contact></Contact>}></Route>
    <Route   path="/projects"  element={<Projects></Projects>}></Route>
    <Route   path="/skills"  element={<Skill></Skill>}></Route>
      <Route   path="/resume"  element={<Resume></Resume>}></Route>
 </Routes>


</BrowserRouter>

   

   
  </>
   
  )
}

export default App;
