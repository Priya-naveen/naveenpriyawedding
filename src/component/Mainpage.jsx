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
        '<div>' + days + ' <span class="block">Days</span></div> <div>' + hours + ' <span class="block">Hours</span></div> <div> ' + minutes + ' <span class="block">Minutes</span></div> <div>' + seconds + ' <span class="block">Seconds</span></div> ';
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
        <ReactPlayer className="audio" width={0} height={0} url={adio} playing={true} volume={0.2} stopOnUnmount={false} />
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

        <div className=''>
          <p className='text-[#8162a2] font-semibold border-b-2 mb-2'>Event Details</p>
          <div className='bg-[#8162a2] p-2 rounded bgCardTexture'>
          <p className='text-white text-center text-sm'>&#10084; ENGAGEMENT &#10084;</p>
          <p className='text-center text-white mt-2 text-sm'>08-Jun-2024 @ 6:00 PM Onwards</p>
          <a className='text-right text-white block mt-2 text-xs ' href="http://www.google.com/calendar/event?action=TEMPLATE&text=Naveen+Priya+Wedding+Event&dates=20240608/20240608&details=NAVEEN%20PRIYA%20RECEPTION%0AYadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005location=Yadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005"> Add to calendar </a></div>
          <div className='bg-[#8162a2] p-2 rounded bgCardTexture mt-3'>
          <p className='text-white text-center text-sm'>&#10084; MARRIAGE &#10084;</p>
          <p className='text-center text-white mt-2 text-sm'>08-Jun-2024 @ 6:00 PM Onwards</p>
          <a className='text-right text-white block mt-2 text-xs ' href="http://www.google.com/calendar/event?action=TEMPLATE&text=Naveen+Priya+Wedding+Event&dates=20240609/20240609&details=NAVEEN%20PRIYA%20MARRIAGE%0AYadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005location=Yadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005"> Add to calendar </a></div>
        </div>
        <div className='p-2  mt-3 text-center'>
          <p className='text-[#8162a2] text-center text-sm'>&#10084; Location &#10084;</p>
          <iframe className='w-full mt-2 rounded'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6374261270767!2d78.06721017407628!3d9.880754775077195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfcdcbf9a6e5%3A0x5b8d68120b6a39a9!2sYadava%20Krishna%20Mahal!5e0!3m2!1sen!2sin!4v1712815882337!5m2!1sen!2sin"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        

      </div>
    
  )
}

export default Mainpage
