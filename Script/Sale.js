

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

function sjekkSkatt() {
  var skattTrekk = document.getElementById("skattTrekk").value;
  var omsetningEtterSkatt = document.getElementById("omsetningEtterSkatt");
  
  omsetningEtterSkatt.innerHTML = skattTrekk - (skattTrekk * 0.15);
}


window.onload = function() { 
  var test = parseInt(document.getElementById("omsetningEtterSkatt").innerHTML);
  var test1 = parseInt(document.getElementById("omsetningEtterSkatt1").innerHTML);
  var test2 = parseInt(document.getElementById("omsetningEtterSkatt2").innerHTML);
  var test3 = parseInt(document.getElementById("omsetningEtterSkatt3").innerHTML);
  var test4 = parseInt(document.getElementById("omsetningEtterSkatt4").innerHTML);
  var test5 = parseInt(document.getElementById("omsetningEtterSkatt5").innerHTML);
  /*var tester = parseInt(prompt("skriv inn et tall"));
  test = tester;*/
  
  //Better to construct options first and then pass it as a parameter
  var options = {
    title: {
      text: "Spline Chart with Export as Image"
    },
    animationEnabled: true,
    exportEnabled: true,
    data: [
    {
      type: "pie", //change it to line, area, column, pie, etc
      dataPoints: [
        { x: 10, y: test},
        { x: 20, y: test1},
        { x: 30, y: test2 },
        { x: 40, y: test3 },
        { x: 50, y: test4 },
        { x: 60, y: test5 }
      ]
    }
    ]
  };
  $("#chartContainer").CanvasJSChart(options);
}



