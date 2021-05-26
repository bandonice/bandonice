

    

    const dropdownBtnTime = document.getElementById("dropdown-btn-time").addEventListener("click", function(){
      document.getElementById("my-dropdown-time").classList.toggle("show");
    });
    const dropdownBtnAllRest = document.getElementById("dropdown-btn-all-rest").addEventListener("click", function(){
      document.getElementById("my-dropdown-all-rest").classList.toggle("show");
    })

    const dropdownBtnRestOne = document.getElementById("dropdown-btn-rest-one").addEventListener("click", function(){
      document.getElementById("my-dropdown-rest-one").classList.toggle("show");
    })

    const dropdownBtnRestTwo = document.getElementById("dropdown-btn-rest-two").addEventListener("click", function(){
      document.getElementById("my-dropdown-rest-two").classList.toggle("show");
    })

    const dropdownBtnRestThree = document.getElementById("dropdown-btn-rest-three").addEventListener("click", function(){
      document.getElementById("my-dropdown-rest-three").classList.toggle("show");
    })

    const dropdownBtnRestFour = document.getElementById("dropdown-btn-rest-four").addEventListener("click", function(){
      document.getElementById("my-dropdown-rest-four").classList.toggle("show");
    })

   
    window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


