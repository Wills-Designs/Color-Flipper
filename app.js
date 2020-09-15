//counter variable
let counter = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e){
    const actions = e.currentTarget.classList;
    if (actions.contains("decrease")) {
      counter --;
    } else if (actions.contains("increase")) {
      counter ++;
    } else {
      counter = 0;
    }
    value.textContent = counter;
    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }    
  })
})

/* alternative code using element ids, less efficienct 
//gets buttons/elements
const btn1 = document.getElementById('btn dec');
const btn2 = document.getElementById('btn reset');
const btn3 = document.getElementById('btn inc');
const value = document.querySelector('#value');



//processes fuction based on which button is clicked
btn1.addEventListener('click', function(){
 counter --;
 value.textContent = counter;
})

btn2.addEventListener('click', function(){
 counter = 0;
 value.textContent = counter;
})

btn3.addEventListener('click', function(){
 counter ++;
 value.textContent = counter;
})

*/

