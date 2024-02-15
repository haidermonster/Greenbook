import React, { useEffect, useState } from 'react'
 import './Section2.css' 

function Section2() {

const [data, setdata] = useState([]);
useEffect(() => {
axios.get('http://localhost:8000/books')  
.then(
  res => setdata(res.data)
)
.catch(
  err => console.log(err)
)
}, [])


  return (
    <>

      <div className="container pb-5">
        <div className="row text-center d-flex justify-content-center">
          <h2 style={{ color: 'rgb(244,146,30)', }}><span style={{ color: '#14f755' }}>Green</span> Book <span style={{ color: '#14f755' }}>Chapters</span> </h2>


          <div style={{ border: '2px solid black', width: '530px', height: '4px', backgroundColor: 'black' }}></div>

        </div>

        <div className="row pt-5 d-flex justify-content-center  " >

          {
            data.map((data) => (
              <div key={data.name} className="card ca" >
                <img src={data.img} className="card-img-top" alt="..." />
                <div className="card-body">

                </div>
              </div>
            ))
          }

        </div>
      </div>


    </>
  )
}

export default Section2