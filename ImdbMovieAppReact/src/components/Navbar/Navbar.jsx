import React from 'react'
import { PiFilmSlateFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

import './Navbar.css'
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <nav className='navbar'>
     <div className='left'>
        <Link to="/"><h1>IMDB Movie</h1></Link>
     </div>
     <div className='center'>
     <PiFilmSlateFill />
     </div>
     <div className='right'>
       <ul>
        <li style={{ textDecoration: "none", listStyleType: "none" , fontSize:"30px"}}> <Link to="/"> <TiHome/> </Link></li>
        <li style={{ textDecoration: "none", listStyleType: "none" }}> <Link to="/my-list"><FaHeart /></Link></li>
       </ul>
     </div>
    </nav>

  )

}

export default Navbar