import React from 'react'

import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';
import EarthCanvas from './EarthCanvas';
import './Asection.css' 
function Asection() {
    return (
        <>

            <div className='container pt-5 pb-5'>

<div className="row text-center"><h1>About Us</h1></div>

                <div className="row">

                    <div className="col-md-6">
                        <div class="card global">
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: 'rgb(244,146,30)' }} >How it started</h5>
                                <h1 class="card-title">Our Aim is To Stop Global warming</h1>
                                <p class="card-text">Global warming refers to the long-term increase in Earth's average surface temperature due to human activities, primarily the emission of greenhouse gases such as carbon dioxide, methane, and nitrous oxide. The burning of fossil fuels for energy, deforestation, and industrial processes significantly contribute to the accumulation of these gases in the atmosphere. As a result, the Earth's climate is undergoing changes, leading to more frequent and severe weather events, rising sea levels, and disruptions in ecosystems.</p>
                           
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">


                    <motion.div variants={slideIn('right', "tween",0.2, 1)} style={{height:'600px'}}>
<EarthCanvas />
</motion.div>

                    </div>


                </div>
            </div>


        </>
    )
}

export default Asection