import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { AdminPublic } from './pages/Admin/SectionAdmPublic.jsx';
import { AdminCanal } from './pages/Admin/SectionCanal/SectionCanal.jsx';
import { User } from './pages/SectionUser.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { Tyc } from './pages/SectionTyc.jsx';
import { Privacy } from './pages/SectionPrivacy.jsx';
import { PostReview } from './pages/Admin/SectionCanal/SectionPostReview.jsx';
import { PostVideo } from './pages/Admin/SectionCanal/SectionPostVideo.jsx';
import { IndexCanal } from './pages/Admin/SectionCanal/SectionIndex.jsx';
import { EditReview } from './pages/Admin/SectionCanal/SectionEditReview.jsx';
import { EditVideo } from './pages/Admin/SectionCanal/SectionEditVideo.jsx';
import { AdminHome } from './pages/Admin/SectionHome/SectionAdmHome.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/canal" element={<Canal />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/categoria" element={<Categorias />} />
            <Route path="/user" element={<User />} />
            <Route path="/terms-of-use" element={<Tyc />} />
            <Route path="/privacy-policies" element={<Privacy />} />

            <Route path="/admin" element={<Admin />}>
              <Route index element={<IndexAdmin />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="public" element={<AdminPublic />} />
              <Route path="canal" element={<AdminCanal />} />
              <Route path="home" element={<AdminHome />} />
              <Route path="/admin/canal" element={<AdminCanal />}>
                <Route index element={<IndexCanal />} />
                <Route path="PostReview" element={<PostReview />} />
                <Route path="PostVideo" element={<PostVideo />} />

                {/* 🔽 Nuevas rutas dinámicas por autor */}
                <Route path="review/:author" element={<EditReview />} />
                <Route path="video/:author" element={<EditVideo />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );

}

export default App

