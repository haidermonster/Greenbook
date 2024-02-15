import React from 'react'

import './Section3.css' 
function Section3() {

  let links =[
    {img:'news.png',btn:'Read More',title:'Climate change: a compilation of stories'},
    
    {img:'news2.jpg',btn:'Read More',title:'Duniya News Multan'},
    
    {img:'news3.png',btn:'Read More',title:' Dated 2022-05-23'},
    
    {img:'news4.png',btn:'Read More',title:'Public school students to get book on climate change'},
    
  ]

  return (
    <>
   
   
   <div className="container pb-5">
<div className="row text-center d-flex justify-content-center"><h2 style={{  color: 'rgb(244,146,30)' }}><span style={{ color: '#14f755' }}>Green</span> Book <span style={{ color: '#14f755' }}>News</span> </h2>

<div style={{ border: '2px solid black', width: '530px', height: '4px', backgroundColor: 'black' }}></div>

</div>



<div className="row pt-5 d-flex justify-content-center" >

{
      links.map((link)=>(
        <div key={link.name} className="card cb"  >
<img src={link.img} className="card-img-top cbimg" alt="..."/>
<div className="card-body"> 

<p class="card-text">{link.title}</p>
    <a href="#" class="btn" style={{width:' 235px', backgroundColor: '#14f755',color:'white'}}>{link.btn}</a>
</div>
</div>
      ))
    }

</div>
</div>

    
    </>
  )
}

export default Section3