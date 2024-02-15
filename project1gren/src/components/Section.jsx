import React from 'react'

function Section() {
    return (
        <>
            <div className='container'>
                <div className="row pt-5 pb-5">

                    <div className="col-md-6">
                        <div className="row"><h1>The <span style={{ color: '#14f755' }}>GREEN BOOK</span> is For the Children</h1></div>

                        <div className="row pt-2"><p>"Greenbooks" is a heartwarming collection for children, offering diverse stories and adventures that captivate young minds. Through vivid characters and imaginative narratives, the series explores themes of friendship, courage, and environmental consciousness. Each book introduces young readers to unique worlds where they can embark on exciting journeys, solving mysteries and overcoming challenges.</p></div>

                        <div className="row pt-2">
                            <div className="col-md-8">
                            <button type="button" class="btn" style={{ backgroundColor: '#14f755',color:'white' }}>Get Started</button>                              <button type="button" class="btn btn-dark">Learn More</button>

                            </div>

                        </div>


                    </div>


<div className="col-md-6"><img src='first.jpeg' className='img-fluid'/></div>


                </div>
            </div>
        </>
    )
}

export default Section