import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react'
import { Home } from './pages/SectionHome.jsx'
import { NavBar } from './pages/Components/navBar.jsx';
import './index.css'
import { Blog } from './pages/SectionBlog.jsx';
import { Canal } from './pages/SectionCanal.jsx';
import { Register } from './pages/Login/SectionRegister.jsx';
import { Login } from './pages/Login/SectionLogin.jsx';
import { Galeria } from './pages/SectionGaleria.jsx';
import { Categorias } from './pages/SectionCatego.jsx';
import { AdminBlog } from './pages/Admin/SectionAdmBlog.jsx';
import { Admin } from './pages/Admin/SectionAdmin.jsx';
import { IndexAdmin } from './pages/Admin/SectionIndex..jsx';
// import axios from 'axios'
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  // const [count, setCount] = useState(0)
  // const [array, setArray] = useState([])

// const fetchApi = async () => {
//   const response = await axios.get('http://localhost:3000/api');
//   setArray(response.data.fruits)
//   console.log(response.data.fruits)
// }

// useEffect(()=>{
//   fetchApi()

// }, [])

  return (
    <AuthProvider>

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/blog" element={<Blog/>}/>    
          <Route path="/canal" element={<Canal/>}/> 
          <Route path="/register" element={<Register/>}/> 
          <Route path="/login" element={<Login/>}/>       
          <Route path="/galeria" element={<Galeria/>}/>                                    
          <Route path="/categoria" element={<Categorias/>}/>  
          <Route path="/admin" element={<Admin/>}>

          <Route index element={<IndexAdmin/>}/>
              <Route path="blog" element={<AdminBlog/>}/>                               
          </Route>   
        </Routes>
      </div>
    </BrowserRouter>
    </AuthProvider>
     )
}

export default App

