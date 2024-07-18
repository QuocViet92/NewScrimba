import './App.css';
import Layout from './Component/Layout';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import ProjectHost from './Pages/ProjectHost';
import ProjectDetail from './Pages/Project/ProjectDetail';
import './server'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='project' element={<ProjectHost/>} />
          <Route path="project/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;


