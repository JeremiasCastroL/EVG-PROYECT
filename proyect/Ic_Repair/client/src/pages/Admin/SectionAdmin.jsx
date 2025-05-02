import { Outlet, Link } from "react-router-dom"
import { Footer } from "../Components/adminComponents/FooterAdmin"
import { BarAdmin } from "../Components/adminComponents/BarAdmin"

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Admin() {
  const [loading, setLoading] = useState(true);
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/admin', { withCredentials: true })
      .then(res => {
        setAdminData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err.response?.data);
        navigate('/'); // si no es admin, redirige al home
      });
  }, [navigate]);

  if (loading) return <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">Cargando...</div>;

  return (
    <div>
         <section>
            <section>
                <BarAdmin/>
                <Outlet/>
                <Footer/>
            </section>
        </section>
    </div>
  );
}
