import React from 'react'
import './Section4.css'

function Section4() {
    return (
        <>
            <div className="container pb-5">
                <div className="row text-center d-flex justify-content-center pb-5">
                    <h1 style={{ color: 'rgb(244,146,30)' }}>The Author</h1>

                    <div style={{ border: '2px solid black', width: '530px', height: '4px', backgroundColor: 'black' }}></div>

                </div>

                <div className="row">
                    <div className="col-md-6">

                        <div className="row">
                            <h1> <span style={{ color: '#14f755' }}>Ahtsham</span>  Anwar</h1>
                        </div>

                        <div className="row">
                            <p>Ahtsham works include 38 plays, 2 nerrative poems, 154 sonnets and a varitey of other poems.No original manuscripts of Ahtsham's plays are known to exist today.It is actually thanks to a group of actors from Ahtsham company that we have about half of the plays at all.They collected them for publications after Ahtsham died,preserving the plays</p>
                        </div>


                    </div>


                    <div className="col-md-6">


                        

                        <div className="row d-flex justify-content-center">
                            <div className="card authr"  >
                                <img src="writer.jpg" className='img-fluid lamp' alt="" />
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default Section4