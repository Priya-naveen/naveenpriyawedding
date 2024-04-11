import React, { useEffect } from 'react'
import mainImage from '../assets/coverImg.png'
import adio from '../assets/Mangalyam.mp3'
import ReactPlayer from 'react-player'
function Mainpage() {
  useEffect(() => {
    const textElements = document.querySelectorAll('.messages');
    
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

    var countDownDate = new Date('Jun 9, 2024').getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById('timer').innerHTML =
        '<div>'+ days + ' <span class="block">Days</span></div> <div>' + hours + ' <span class="block">Hours</span></div> <div> ' + minutes + ' <span class="block">Minutes</span></div> <div>' + seconds + ' <span class="block">Seconds</span></div> ';
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'Jun 9, 2024';
      }


    }, 1000);
    return () => {
      clearInterval(myInterval);
      clearInterval(x);
    };

  }, [])
  return (
    <div className='container lg:w-2/3 bg-white bgTexture min-h-screen rounded relative'>

      <div id="blinkArea" className='flex  flex-col justify-center items-center h-screen'>
      <ReactPlayer className="audio" width={0} height={0} url={adio} playing={true} volume={0.2} stopOnUnmount={false}/>
        <p className='messages text-[#8162a2] text-1xl font-medium'>Dear Family and Friends,</p>
        <p className='messages text-[#8162a2] text-1xl font-medium'>We Invited</p>
        <p className='messages text-[#8162a2] text-1xl font-medium'>You To Our</p>
        <p className='messages text-[#8162a2] text-1xl font-medium'>Wedding Ceremony</p>
      </div>
      <div id="contentArea">
        <p className='text-center mb-3 text-[#8162a2] font-medium'>A decade of love, laughter, and cherished memories - our hearts are overflowing with gratitude as we invite you to celebrate the joyous occasion of our marriage.</p>

        <p className='text-center mb-3 text-[#8162a2]'>&#x2764; &#x2764; </p>
        <div className='w-full h-52 lg:h-96 my-0 mx-auto relative'>
          <img src={mainImage} className='w-full h-full object-cover rounded-md' />
          <div className='bg-[#000000a8] absolute w-full h-full top-0 rounded-md'></div>
          <p className='text-center mb-1 text-[#ffffff4a] font-bold text-3xl lg:text-4xl absolute bottom-0 w-full'>We Are Getting Married</p>
        </div>
        <div className="m-4 text-center text-[#8162a2] font-semibold">
          
          <h2 className='mb-2'>Countdown to Wedding Ceremony</h2>
          <div id="defaultCountdown" className="hasCountdown">
            <p className="countdown_row flex justify-evenly" id="timer"></p>
          </div>
        </div>

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
