function getText() {

  var input = document.getElementById("listItem").value;
  var list = document.getElementById('list');
  var listAddition = document.createElement("li")

  /*listAddition.appendChild(document.createTextNode(input + '<h1>test</h1>'));
  list.appendChild(listAddition)*/

  document.getElementById("list").innerHTML +=  '<li>' + input + '</li>' + '<button class="delete">X</button>';
  
var closebtns = document.getElementsByClassName("delete");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    list.removeChild(list.childNodes[1]);
    list.removeChild(list.childNodes[1]);
  });
}


}




const btn = document.getElementById('btn');
btn.addEventListener('click', getText);

