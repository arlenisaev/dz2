const box = document.querySelector('.box')


let positionX = 0
let positionY = 0 
let positionX_and = 449
let positionY_and = 449

const move = () => {
   if (positionX <= 449) {
      positionX++
      box.style.left = `${positionX}px`
      setTimeout(move, 1)
   } else if (positionX >= 449 && positionY <= 449) {
      positionY++
      box.style.top =  `${positionY}px`
      setTimeout(move, 1)
   } else if (positionX_and > 0){
      positionX_and--;
      box.style.left = `${positionX_and}px`;
      setTimeout(move, 1)
   } else if (positionY_and > 0){
      positionY_and--;
      box.style.top = `${positionY_and}px`;
      setTimeout(move, 1)
   } else {
      positionX = 0; 
      positionY = 0;
      positionX_and = 449;
      positionY_and = 449;
   }
}
   move()
const number = document.querySelector('.second')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
let i = 0;
start.onclick = () => {
   const intervalId = setInterval(() => {
      i += 1;
      number.innerText = i;
   }, 1000)
   stop.onclick = () => {
      clearInterval(intervalId);
   };
}