

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


function displayOmsetning() {
  var omsetningDrop = document.querySelectorAll(".omsetning");
  for(var i = 0; i < omsetningDrop.length; i++ ) {
    omsetningDrop[i].style.display = "block";
  }
}

function hideOmsetning() {
  var omsetningDrop = document.querySelectorAll(".omsetning");
  for(var i = 0; i < omsetningDrop.length; i++ ) {
    omsetningDrop[i].style.display = "none";
  }
}


function displayTimesalg() {
  var timesalgDrop = document.querySelectorAll(".timesalg");
  for(var i = 0; i < timesalgDrop.length; i++ ) {
    timesalgDrop[i].style.display = "block";
  }
}

function hideTimesalg() {
  var timesalgDrop = document.querySelectorAll(".timesalg");
  for(var i = 0; i < timesalgDrop.length; i++ ) {
    timesalgDrop[i].style.display = "none";
  }
}


function displaySkatt() {
  var skattDrop = document.querySelectorAll(".skatt");
  for(var i = 0; i < skattDrop.length; i++ ) {
    skattDrop[i].style.display = "block";
  }
}

function hideSkatt() {
  var skattDrop = document.querySelectorAll(".skatt");
  for(var i = 0; i < skattDrop.length; i++ ) {
    skattDrop[i].style.display = "none";
  }
}

function displayProsent() {
  var prosentDrop = document.querySelectorAll(".prosent");
  for(var i = 0; i < prosentDrop.length; i++ ) {
    prosentDrop[i].style.display = "block";
  }
}

function hideProsent() {
  var prosentDrop = document.querySelectorAll(".prosent");
  for(var i = 0; i < prosentDrop.length; i++ ) {
    prosentDrop[i].style.display = "none";
  }
}




