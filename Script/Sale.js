

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
  var GyldnePizzaStoro = parseInt(document.getElementById("omsetningEtterSkatt").innerHTML);
  var GyldnePizzaGronnland = parseInt(document.getElementById("omsetningEtterSkatt1").innerHTML);
  var GyldnePizzaGrunerlokka = parseInt(document.getElementById("omsetningEtterSkatt2").innerHTML);
  var GyldnePizzaFrogner = parseInt(document.getElementById("omsetningEtterSkatt3").innerHTML);

  var skattSjekk = document.getElementById("outputDiv");
  var omsetningTotal = GyldnePizzaStoro + GyldnePizzaGronnland + GyldnePizzaGrunerlokka + GyldnePizzaFrogner;
  
  skattSjekk.innerHTML = `<p>Omsetning etter skatt for alle restaurantene:</p> ${omsetningTotal - (omsetningTotal * 0.15)} kr`;
}


function skrivInnOmsetning() {
  var GyldnePizzaStoro = document.getElementById("omsetningEtterSkatt");
  var inputTest = document.getElementById("inputTest").value;

  GyldnePizzaStoro.innerHTML = inputTest;
}

function updateChart(){
  var GyldnePizzaStoro = parseInt(document.getElementById("omsetningEtterSkatt").innerHTML);
  var GyldnePizzaGronnland = parseInt(document.getElementById("omsetningEtterSkatt1").innerHTML);
  var GyldnePizzaGrunerlokka = parseInt(document.getElementById("omsetningEtterSkatt2").innerHTML);
  var GyldnePizzaFrogner = parseInt(document.getElementById("omsetningEtterSkatt3").innerHTML);

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
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
          {y: GyldnePizzaStoro, label: "Gyldne Pizza Storo"},
          {y: GyldnePizzaGronnland, label: "Gyldne Pizza Grønnland"},
          {y: GyldnePizzaGrunerlokka, label: "Gyldne Pizza Grünerløkka"},
          {y: GyldnePizzaFrogner, label: "Gyldne Pizza Frogner"},
        ]
      }]
    });

   chart.render();
  } 