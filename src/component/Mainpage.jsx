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
    <div className='cardArea  w-full md:w-2/3 lg:w-2/3  bg-[#faebd7] min-h-screen rounded relative'>
        
       <div id="blinkArea" className='flex  flex-col justify-center items-center h-screen'>
        <p className='messages text-[#a52a2a] text-1xl'>Dear Family and Friends,</p>
        <p className='messages text-[#a52a2a] text-1xl'>We Invited</p>
        <p className='messages text-[#a52a2a] text-1xl'>You To Our</p>
        <p className='messages text-[#a52a2a] text-1xl'>Wedding Ceremony</p>
       </div>
       <div id="contentArea">
        <p className='text-center mb-3 text-[#a52a2a]'>A decade of love, laughter, and cherished memories - our hearts are overflowing with gratitude as we invite you to celebrate the joyous occasion of our marriage.</p>
        
        <p className='text-center mb-3 text-[#a52a2a]'>&#x2764; &#x2764; </p>
        <div className='w-56 h-56 my-0 mx-auto'>
        <img src={mainImage} className='w-full h-full object-contain'/>
        </div>
        <p className='text-center mb-3 text-[#a52a2a] font-bold text-lg'> Naveen & Shanmugapriya </p>

        <div className='bg-white rounded-sm p-2'>
        <p className='text-[#a52a2a] textCenter'>&#10084; Reception &#10084;</p> 
            <a className='addCl' href="http://www.google.com/calendar/event?action=TEMPLATE&text=Naveen+Priya+Wedding+Event&dates=20240608/20240608&details=Event%20Details%20Here&location=F%2C%20Yadava%20Krishna%20Mahal">
            08-Jun-2024 @ 6:00 PM Onwards
            </a>
        </div>
        <div className='bg-white rounded-sm p-2 mt-2'>
        <p className='text-[#a52a2a] textCenter'>&#10084; Wedding &#10084;</p> 
            <a className='addCl' href="#">
            09-Jun-2024 @ 10:30 AM Onwards
            </a>
        </div>
       </div>
    </div>
  )
}

export default Mainpage
