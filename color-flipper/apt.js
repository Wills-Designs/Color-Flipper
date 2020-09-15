function getUserName() {
var nameField = document.getElementById('nameField').value;
var result = document.getElementById('result');

  if (nameField.length < 6) {
     result.textContent = 'Hex must be 7 charcs';
  } else {
    document.body.style.backgroundColor = "#" + nameField;
  }
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);
