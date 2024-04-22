import React, { useEffect } from 'react'
import mainImage from '../assets/coverImg.png'
import adio from '../assets/Mangalyam.mp3'
import ReactPlayer from 'react-player'
import maps from '../assets/location.png'
import groomInvi from '../assets/NaveenFamilyinvitation.pdf'
import brideInvi from '../assets/PriyaFamilyinvitation.pdf'
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
      document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;
       
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

          <h2 className='mb-2'><p className='text-xs'>We are waiting for.....</p><p className='text-xl'>Celebrate Our Love</p></h2>
          <div id="defaultCountdown" className="hasCountdown">
            {/* <p className="countdown_row flex flex-wrap gap-2" id="timer"></p> */}
            <p class="countdown_row flex flex-wrap gap-2 justify-center" id="timer"><div className='w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded'><span id='days'></span> <span class="block">Days</span></div> <div className='w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded'><span id='hours'></span> <span class="block">Hours</span></div> <div className='w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded'> <span id='minutes'></span> <span class="block">Minutes</span></div> <div className='w-[48%] md:w-28 border-solid border-2 border-[#8162a2] text-[#8162a2] p-2 my-1 rounded'><span id='seconds'></span> <span class="block">Seconds</span></div> </p>
          </div>
        </div>

        <div className=' mt-3 '>
          <p className='text-[#8162a2] font-semibold border-b-2 mb-2'>Event Details</p>
          <div className='bg-[#8162a2] p-2 rounded bgCardTexture font-semibold'>
            <p className='text-white text-center text-sm'>&#10084; ENGAGEMENT &#10084;</p>
            <p className='text-center text-white mt-2 text-sm font-semibold'>08-Jun-2024 @ 6:00 PM Onwards</p>
            <a className='text-right text-white block mt-2 text-xs ' href="http://www.google.com/calendar/event?action=TEMPLATE&text=Naveen+Priya+Wedding+Event&dates=20240608/20240608&details=NAVEEN%20PRIYA%20RECEPTION%0AYadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005location=Yadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005"> Add to calendar </a></div>
          <div className='bg-[#8162a2] p-2 rounded bgCardTexture mt-3 font-semibold'>
            <p className='text-white text-center text-sm'>&#10084; MARRIAGE &#10084;</p>
            <p className='text-center text-white mt-2 text-sm'>09-Jun-2024 @ 10:00 AM Onwards</p>
            <a className='text-right text-white block mt-2 text-xs ' href="http://www.google.com/calendar/event?action=TEMPLATE&text=Naveen+Priya+Wedding+Event&dates=20240609/20240609&details=NAVEEN%20PRIYA%20MARRIAGE%0AYadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005location=Yadava%20Krishna%20Mahal%0A279%2C%20Big%20Car%20St%2C%20Thiruparankundram%2C%20Tamil%20Nadu%20625005"> Add to calendar </a></div>
        </div>
        <div className='bg-[#8162a2] text-white p-2 rounded bgCardTexture mt-3 font-semibold'>
          <p className='text-center text-sm'>&#10084; LOCATION &#10084;</p>
          <a href='https://maps.app.goo.gl/WzQ9HmCnNmcf6PDm8'>
        <div className=' flex gap-2 items-center md:flex-col'>
          <div className='w-2/3 lg:w-16'>
            <img src={maps} className='rounded'></img>
          </div>
          <div className='text-white text-sm'>
            <p>279, Big Car St, Thiruparankundram, Tamil Nadu 625005</p>
            <p className='text-right text-white text-xs '> View Location</p>
          </div>
        </div>
       
        </a>
        </div>
        <div className=' mt-3  '>
          <p className='text-[#8162a2] font-semibold border-b-2 mb-2'>Download Family Invitation</p>
          <div className='flex justify-center gap-3 pt-3 '>
            <a href={groomInvi} target='_blank' className='bg-[#8162a2] hover:bg-[#9b72c6] w-24 text-white py-2 px-3 rounded-md flex flex-col gap-1 cursor-pointer justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="35" height="35" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                  <path d="M2035 5105 c-193 -34 -381 -109 -551 -221 -108 -71 -298 -258 -371 -364 -106 -156 -182 -336 -225 -531 -21 -97 -22 -127 -23 -469 0 -406 2 -420 71 -592 l36 -88 -46 -52 c-92 -105 -136 -223 -136 -363 0 -147 47 -268 143 -371 83 -89 158 -134 274 -164 41 -10 45 -15 83 -95 66 -137 154 -260 274 -381 207 -206 432 -328 727 -391 119 -25 420 -25 539 1 272 58 497 173 688 351 129 121 224 249 308 415 42 85 46 90 87 100 116 30 191 75 274 164 96 103 143 224 143 371 0 140 -44 258 -136 363 l-46 52 36 89 c66 163 71 204 71 591 0 285 -3 361 -18 437 -51 273 -178 527 -360 719 -164 174 -357 299 -572 372 -190 65 -195 65 -715 68 -369 2 -493 -1 -555 -11z m1098 -257 c388 -106 694 -389 820 -758 51 -150 58 -208 64 -505 6 -286 -3 -413 -32 -492 -13 -37 -14 -34 -14 70 -1 123 -16 169 -62 192 -40 21 -81 19 -147 -9 -159 -66 -311 -97 -487 -96 -341 0 -634 121 -876 360 -136 135 -205 260 -224 410 -10 73 -27 104 -69 124 -43 20 -69 20 -111 0 -38 -17 -65 -66 -65 -113 0 -43 26 -167 50 -235 l19 -55 -67 -62 c-173 -160 -394 -261 -622 -285 -138 -14 -160 -43 -161 -221 0 -131 -10 -129 -35 7 -16 91 -19 521 -4 655 30 265 148 513 334 700 169 170 361 274 604 325 79 17 130 19 537 17 l450 -3 98 -26z m-916 -1402 c202 -205 470 -351 753 -411 195 -41 453 -37 648 10 57 14 106 25 109 25 3 0 3 -183 0 -407 -5 -438 -8 -467 -64 -633 -72 -213 -224 -418 -418 -566 -130 -98 -356 -189 -529 -213 -546 -76 -1085 260 -1262 785 -54 162 -56 187 -61 671 l-5 452 39 6 c237 41 479 158 640 310 32 30 60 54 62 55 3 0 42 -38 88 -84z m-1067 -975 c1 -80 5 -180 10 -221 4 -41 6 -77 4 -79 -12 -12 -94 93 -114 146 -38 100 -16 226 53 300 38 42 47 16 47 -146z m2925 45 c33 -110 6 -223 -71 -304 -24 -25 -46 -43 -49 -41 -2 3 0 43 5 90 5 46 10 145 10 220 0 163 8 180 58 123 18 -21 39 -60 47 -88z" />
                  <path d="M1925 2816 c-65 -29 -70 -43 -70 -207 l0 -149 30 -30 c39 -38 90 -48 137 -26 59 28 68 56 68 209 0 123 -2 137 -22 162 -21 26 -74 55 -100 55 -7 -1 -26 -7 -43 -14z" />
                  <path d="M3113 2823 c-12 -2 -36 -20 -53 -39 l-30 -35 0 -135 c0 -154 9 -182 68 -210 47 -22 98 -12 137 26 l30 30 3 138 c3 147 -3 170 -48 203 -27 20 -72 30 -107 22z" />
                  <path d="M2203 1981 c-41 -26 -53 -49 -53 -107 0 -44 4 -51 50 -96 191 -184 529 -184 720 0 47 45 50 52 50 98 0 57 -17 87 -62 110 -46 24 -99 13 -152 -31 -121 -99 -271 -98 -392 1 -57 46 -113 55 -161 25z" />
                  <path d="M1755 1085 c-69 -37 -94 -86 -131 -255 -22 -100 -30 -351 -15 -463 16 -118 54 -263 78 -296 37 -49 81 -71 143 -71 55 0 66 5 293 135 l237 136 47 -28 c44 -26 56 -28 153 -28 97 0 109 2 153 28 l48 28 207 -119 c268 -155 262 -152 325 -152 99 0 150 54 185 196 48 196 56 402 23 596 -27 158 -56 233 -104 272 -35 28 -46 31 -105 31 l-67 0 -229 -132 c-125 -73 -232 -133 -236 -133 -4 0 -29 12 -56 28 -44 24 -59 27 -144 27 -85 0 -100 -3 -144 -27 -27 -16 -52 -28 -56 -28 -4 0 -111 59 -236 132 -206 119 -234 132 -284 136 -37 2 -65 -2 -85 -13z m325 -379 l195 -114 3 -43 2 -44 -202 -116 c-167 -95 -204 -113 -209 -100 -17 44 -31 211 -26 313 5 112 22 218 35 218 4 0 95 -52 202 -114z m1182 57 c17 -77 15 -370 -3 -439 l-14 -51 -203 116 -202 116 2 44 3 44 195 113 c107 62 198 114 202 114 4 0 13 -26 20 -57z m-667 -213 l0 -95 -35 0 -35 0 -3 84 c-4 105 -1 113 40 109 l33 -3 0 -95z" />
                </g>
              </svg>
              Groom</a>
            <a href={brideInvi} target='_blank' className='bg-[#8162a2] hover:bg-[#9b72c6] w-24 text-white py-2 px-3 rounded-md flex flex-col gap-1 cursor-pointer justify-center items-center'>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="35" height="35" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#ffffff" stroke="none">
                  <path d="M2422 5105 c-233 -53 -425 -246 -478 -482 -15 -69 -16 -199 -2 -284
2 -11 -29 -38 -92 -80 -111 -74 -254 -213 -329 -319 -145 -206 -231 -464 -231
-692 0 -89 7 -116 40 -153 18 -20 8 -38 -411 -755 -441 -756 -478 -824 -523
-948 -68 -191 -93 -475 -52 -607 61 -203 219 -366 418 -434 l52 -18 -5 -59
c-8 -119 -4 -173 17 -201 69 -92 191 -95 249 -7 16 24 24 60 33 155 23 250
108 446 268 618 81 88 133 124 570 397 258 161 402 258 417 278 21 29 22 43
25 226 l3 195 169 0 169 0 3 -195 c3 -183 4 -197 25 -226 15 -20 159 -117 417
-278 437 -273 489 -309 570 -397 160 -172 245 -368 268 -618 9 -95 17 -131 33
-155 58 -88 180 -85 249 7 21 28 25 82 17 201 l-5 59 52 18 c160 54 299 174
371 319 55 113 74 213 67 348 -10 183 -55 358 -132 517 -19 39 -227 401 -463
805 -419 717 -429 735 -411 755 33 37 40 64 40 153 0 228 -86 486 -231 692
-75 106 -218 245 -329 319 -95 63 -95 64 -90 100 13 94 5 246 -17 316 -44 139
-154 280 -276 353 -132 80 -319 111 -465 77z m282 -319 c108 -53 186 -175 186
-291 0 -63 4 -61 -100 -39 -103 23 -357 23 -460 0 -104 -22 -100 -24 -100 39
0 136 98 267 233 311 66 22 174 13 241 -20z m-309 -1052 c-35 -159 -159 -297
-321 -355 -51 -19 -87 -22 -266 -27 l-208 -4 0 23 c0 13 17 74 38 135 111 324
358 559 673 638 l94 24 3 -182 c2 -136 -1 -198 -13 -252z m497 383 c224 -85
412 -243 522 -439 38 -68 91 -217 102 -287 l7 -43 -209 4 c-181 5 -217 8 -268
27 -115 41 -205 116 -270 224 -53 89 -66 165 -66 381 l0 184 59 -13 c32 -8 87
-25 123 -38z m-285 -791 c52 -66 156 -146 248 -191 117 -56 202 -76 368 -82
l147 -6 0 -56 c0 -69 -30 -199 -64 -276 -63 -142 -199 -294 -332 -373 -38 -23
-112 -56 -164 -74 -91 -31 -101 -33 -250 -33 -149 0 -159 2 -250 33 -276 95
-474 310 -540 585 -11 45 -20 107 -20 138 l0 56 148 6 c165 7 252 26 367 82
92 45 196 125 248 191 23 29 44 53 47 53 3 0 24 -24 47 -53z m-1079 -699 c88
-225 255 -418 475 -549 l87 -52 -2 -174 -3 -175 -353 -221 c-193 -122 -379
-241 -412 -265 -145 -106 -316 -318 -391 -486 -21 -45 -40 -75 -49 -75 -32 0
-120 50 -160 90 -23 23 -54 67 -69 99 -23 50 -26 67 -25 166 1 120 24 236 70
353 26 67 780 1372 793 1372 3 0 21 -37 39 -83z m2484 -559 c206 -354 386
-671 402 -706 50 -113 78 -244 80 -372 1 -105 -1 -120 -25 -171 -15 -32 -46
-76 -69 -99 -40 -40 -128 -90 -160 -90 -9 0 -28 30 -49 75 -75 168 -246 380
-391 486 -33 24 -219 143 -412 265 l-353 221 -3 175 -2 174 91 55 c215 127
390 330 474 552 16 43 33 77 36 77 4 0 175 -289 381 -642z"/>
                  <path d="M1798 605 c-155 -42 -282 -165 -329 -316 -23 -73 -25 -169 -4 -209
67 -129 261 -89 280 57 10 76 27 114 68 147 l39 31 708 0 708 0 39 -31 c41
-33 58 -71 68 -147 19 -146 213 -186 280 -57 20 38 19 133 -1 201 -47 158
-187 292 -345 328 -70 16 -1451 13 -1511 -4z"/>
                </g>
              </svg>

              Bride</a>
          </div>
        </div>
        <div className=' mt-3 '>
          <p className='text-[#8162a2] font-semibold border-b-2 mb-2'>Contact Details</p>

          <p className='text-sm p-1 hover:bg-[#efeef0] '>Mobile: <a href='tel:+919786658504'>+91 97866 58504</a></p>
          <p className='text-sm p-1 hover:bg-[#efeef0]'>Mail: <a href='mailto:txt2naveen@gmail.com'>txt2naveen@gmail.com</a></p>
        </div>
        <footer className='py-3 pb-0 text-[#8162a2]'><p className='text-xs font-medium'>We look forward to sharing this special day with you. With love and gratitude,</p>
      <p className='text-center text-black text-xs  font-medium mt-1'>&#x2764; &#x2764; Naveen & Shanmugapriya &#x2764; &#x2764;</p>
    
      </footer>
      </div>
      


    </div>
 

  )
}

export default Mainpage
