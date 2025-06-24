function analog_clock() {
  let second_hand = document.getElementsByClassName("seconds")[0];
  let minutes = document.getElementsByClassName("minutes")[0];
  let hours = document.getElementsByClassName("hours_hand")[0];
  setInterval(() => {
    let date = new Date();
    
    second_hand.style.transform = `rotate(${6 * date.getSeconds()}deg)`;
    minutes.style.transform = `rotate(${6* date.getMinutes()}deg)`;
    hours.style.transform = `rotate(${30 * date.getHours() + date.getMinutes() / 2}deg)`;
  }, 100);
}
analog_clock();


function digital_clock(){
    let hours_side=document.getElementsByClassName("hours_side")[0]
    let minute_side=document.getElementsByClassName("minute_side")[0]
    let second_side=document.getElementsByClassName("second_side")[0]
    setInterval(() => {
    let date = new Date();
    hours_side.innerHTML=date.getHours().toString().padStart(2,"0")
    minute_side.innerHTML=date.getMinutes().toString().padStart(2,"0")
    second_side.innerHTML=date.getSeconds().toString().padStart(2,"0")
    second_side.classList.toggle("green")

   
  }, 500);
}

digital_clock()
