import React from 'react'
import nslogo from '../assets/NSlogo.png'
import topFlower from '../assets/top.png'
import bottomFlower from '../assets/bottom.png'
import nameCircle  from  '../assets/nameCircle.png'
import { Link } from "react-router-dom";
function Splash() {
  return (
    
    <div class="container">
    <div class="header">
        <img src={topFlower} />
    </div>
    <div class="nameArea">
        <div class="imgSpin"><img src={nameCircle} /></div>
        <div class="coupleName"> <label><img src={nslogo}/></label></div>
    </div>

    <div class="buttonClass"><Link to="/wedding"> <button>Click To Join With Us</button></Link></div>

    <div class="footer">
        <img src={bottomFlower} />
    </div>
</div>
  )
}

export default Splash
