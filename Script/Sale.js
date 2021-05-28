

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

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: false,
      backgroundColor: "#30363d",
      
      title: {
        text: "Omsetning per restaurant 2021",
        fontColor: "white",
      },
      
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "#### kr",
        indexLabel: "{label} {y}",
        indexLabelFontColor: "white",
        dataPoints: [
          {y: test, label: "Gyldne Pizza Storo"},
          {y: test1, label: "Gyldne Pizza Grønnland"},
          {y: test2, label: "Gyldne Pizza Grünerløkka"},
          {y: test3, label: "Gyldne Pizza Frogner"},
        ]
      }]
    });
    chart.render();
    
    }