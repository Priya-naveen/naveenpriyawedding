import React, { useEffect } from 'react'
import mainImage from '../assets/mainpage.png'
function Mainpage() {
    useEffect(()=>{
        const textElements = document.querySelectorAll('.messages');
        console.log(textElements)
        let currentIndex = 0;
    
        function showNextText() {
          if (currentIndex === 3) {
            textElements[currentIndex].classList.remove('active');
            clearInterval(myInterval);
            document.getElementById('blinkArea').style.display = 'none';
            document.getElementById('contentArea').style.display = 'block';
          } else {
            textElements[currentIndex].classList.remove('active');
            currentIndex = currentIndex + 1;
            textElements[currentIndex].classList.add('active');
          }
        }
    
        textElements[currentIndex].classList.add('active');
        const myInterval = setInterval(showNextText, 3000);
        return () => {
            clearInterval(myInterval);
           
          };

    },[])
  return (
    <div className='cardArea flex  flex-col justify-center items-center w-2/3 bg-[#faebd7] min-h-screen rounded relative'>
        
       <div id="blinkArea">
        <p className='messages text-[#a52a2a] text-3xl'>Dear Family and Friends,</p>
        <p className='messages text-[#a52a2a] text-3xl'>We Invited</p>
        <p className='messages text-[#a52a2a] text-3xl'>You To Our</p>
        <p className='messages text-[#a52a2a] text-3xl'>Wedding Ceremony</p>
       </div>
       <div id="contentArea">
        <img src={mainImage}/>
       </div>
    </div>
  )
}

export default Mainpage
