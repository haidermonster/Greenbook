import React from 'react'
import { MdEmail } from "react-icons/md";

import { FaPhone } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className='container-fluid' style={{ backgroundColor: '#a0fc9d' }}>
                <div className="container">
                    <div className="row pt-3">

                        <div className="col-md-3">
                            <div className="row"><img src="_logo.png" alt="" /></div>

                            <div className="row"><p>Pakistan first online book platform for children of 12 years old that covers all topics related to global changes</p></div>

                            <div className="row"><p><MdEmail style={{ color: 'rgb(244,146,30)' }} /> mail@thechildrengreenbook.net</p></div>


                            <div className="row"><p><FaPhone style={{ color: 'rgb(244,146,30)' }} /> (92)061 9210433</p></div>

                        </div>


                        <div className="col-md-3">
                            <div className="row"><h4 style={{color:'rgb(242,148,33)'}}>Resources</h4></div>

                            <div className="row"><p>Terms & conditions</p></div>
                            <div className="row"><p> Privacy policy</p></div>
                            <div className="row"><p> FAQs</p></div>
                            <div className="row"><p> Career</p></div>

                        </div>



                        <div className="col-md-3">
                            <div className="row"><h4 style={{color:'rgb(242,148,33)'}}>Quick links</h4></div>

                            <div className="row"><p>About Us</p></div>

                            <div className="row"><p>Gallery</p></div>
                            <div className="row"><p>Services</p></div>
                            <div className="row"><p>Contact Us</p></div>
                        </div>






                        <div className="col-md-3">
                            <div className="row"><h4 style={{color:'rgb(242,148,33)'}} >Follow Us</h4></div>

                        </div>











                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer