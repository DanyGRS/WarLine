//Função do Pop-up
function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function hideModal(){
    var element =  document.getElementById("modal");
    element.classList.remove("show-modal");
}

function showModalDois() {
  var element = document.getElementById("modalDois");
  element.classList.add("show-modalDois");
}

function hideModalDois(){
  var element =  document.getElementById("modalDois");
  element.classList.remove("show-modalDois");
}

function showModalTres() {
  var element = document.getElementById("modalTres");
  element.classList.add("show-modalTres");
}

function hideModalTres(){
  var element =  document.getElementById("modalTres");
  element.classList.remove("show-modalTres");
}

function showModalQuatro() {
  var element = document.getElementById("modalQuatro");
  element.classList.add("show-modalQuatro");
}

function hideModalQuatro(){
  var element =  document.getElementById("modalQuatro");
  element.classList.remove("show-modalQuatro");
}

function showModalCinco() {
  var element = document.getElementById("modalCinco");
  element.classList.add("show-modalCinco");
}

function hideModalCinco(){
  var element =  document.getElementById("modalCinco");
  element.classList.remove("show-modalCinco");
}

function showTuto() {
  var element = document.getElementById("tutorial");
  element.classList.add("show-tutorial");
}

function hideTuto(){
  var element =  document.getElementById("tutorial");
  element.classList.remove("show-tutorial");
}

//Função do DropDown
function myFunction() { 
  document.getElementById("myDropdown").classList.toggle("show");
  document.querySelector(".carrossel").style.zIndex = '-1';
 
  
}
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event){
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'),document.querySelector(".carrossel").style.zIndex = '1') {
        openDropdown.classList.remove('show');
        
      }
      
    }
  }
}
