//Função do Pop-up
function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function hideModal(){
    var element =  document.getElementById("modal");
    element.classList.remove("show-modal");
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
