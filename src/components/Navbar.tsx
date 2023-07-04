import React, {useState} from 'react';
//import logo from '../assets/logo.png';
import logoNeto from '../assets/neto - logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setnav] = useState(false);
     const changeBackground = () => {
            if(window.scrollY >= 50) {
                setnav(true);
            } else {
                setnav(false);
            }
        }
        window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
    <Link to="#" className="logo" >
    <img src={logoNeto} alt=" " />
    </Link>
    <input type="checkbox" className="menu-btn" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
     <span className="nav-icon"></span>
    </label>
        <ul className="menu">
         <li><Link to="main" >Inicio</Link></li>
         <li><Link to="features" >Actividades</Link></li>
         <li><Link to="presentaion" >Probá una clase</Link></li>
         <li><Link to="about" >Sedes</Link></li>
         <li><Link to="contact" >Contacto</Link></li>
         

        </ul>
    


    </nav>
  )
}

export default Navbar
