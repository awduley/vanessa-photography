const circleLeft = document.querySelector('.circle-left');
const circleRight = document.querySelector('.circle-right');

// Home page image slider
const slideArray = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg', 'img/slide6.jpg', 'img/slide7.jpg', 'img/slide8.jpg','img/slide9.jpg'];

let slide = document.querySelector('.slide');

slide.src = slideArray[0];
let num = 0
num ++;

// Slider function
setInterval(() => {
    if(num < slideArray.length) {
      slide.src = slideArray[num];
      num ++;
    } else {
      slide.src = slideArray[0];
      num = 1;
    }
}, 6000);

// Code below for use later if I want to add more functionality to the website
    // circleLeft.addEventListener('click', () => {
    //   if(slideArray[num] === slideArray[0]) {
    //     num --;
    //     slide.src = slideArray[num];
    //   }
    //   num --;
    //   slide.src = slideArray[num];
    // });




  