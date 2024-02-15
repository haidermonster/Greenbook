import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Navbar from './Navbar';
function Header() {
    return (
        <>

            <div className="container-fluid">
                <div className="row pt-2" style={{ backgroundColor: '#14f755' }}>
                    <div className="offset-md-2 col-md-7 text-light">

                        <p><FaPhone />(92) 061 9210433 <span>|</span><IoIosHome />School Eucation Department, South Punjab</p>

                    </div>

                    <div className=" col-md-3 text-light">

                        <span><FaFacebookF /> <FaYoutube /></span>

                    </div>

                </div>

            </div>



            <Navbar/>

        </>
    )
}

export default Header