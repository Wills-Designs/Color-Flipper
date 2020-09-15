let count = 0;  //initializes the vowel count at 0

let btn = document.getElementById('btn');  

btn.addEventListener('click', function(){
  let text = document.getElementById('userInput').value;
 
  //loops through text to find vowels adding 1 to count for each vowel
  for (let i = 0; i < text.length; i++){
    if(text.charAt(i) === "a"){
    count++;
    } else if(text.charAt(i) === "e"){
    count++;
    } else if(text.charAt(i) === "i"){
    count++;
    } else if(text.charAt(i) === "o"){
    count++;
    } else if(text.charAt(i) === "u"){
    count++;
    }
  }

  //alerts message depending on if count is 0 or > 0
  if(count > 0){
    alert(`There are a total of ${count} vowels in the text provided.`); 
    count = 0;
  } else if (count === 0){
    alert('There are no vowels in the text provided.');
  }

})









