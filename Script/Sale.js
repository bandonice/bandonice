/*The variables below allow the user to hide and show the main dropdown that display the Sale and and Average menu*/

const dropdownBtnTime = document.getElementById("dropdown-btn-all-rest").addEventListener("click", function(){
  	document.getElementById("my-dropdown-all-rest").classList.toggle("show");
});

const dropdownBtnAllRest = document.getElementById("dropdown-btn-rest-one").addEventListener("click", function(){
  	document.getElementById("my-dropdown-rest-one").classList.toggle("show");
});

const dropdownBtnRestTwo = document.getElementById("dropdown-btn-rest-two").addEventListener("click", function(){
  	document.getElementById("my-dropdown-rest-two").classList.toggle("show");
});

const dropdownBtnRestThree = document.getElementById("dropdown-btn-rest-three").addEventListener("click", function(){
 	document.getElementById("my-dropdown-rest-three").classList.toggle("show");
});

const dropdownBtnRestFour = document.getElementById("dropdown-btn-rest-four").addEventListener("click", function(){
 	 document.getElementById("my-dropdown-rest-four").classList.toggle("show");
});

/*The functions below allow the user to hide the dropdown menu after it's been displayed. This affects the Sale and average dropdown menus*/

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


function displayGjennomsnitt() {
  var timesalgDrop = document.querySelectorAll(".gjennomsnitt");
  	for(var i = 0; i < timesalgDrop.length; i++ ) {
    	timesalgDrop[i].style.display = "block";
  	}
}

function hideGjennomsnitt() {
  var timesalgDrop = document.querySelectorAll(".gjennomsnitt");
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

/*Gets turnover values from the all restaurants and calculates the turnover after taxes, in this case 15 percent*/

function sjekkSkatt() {
  	var GyldnePizzaStoro = parseInt(document.getElementById("omsetningEtterSkatt").innerHTML);
  	var GyldnePizzaGronnland = parseInt(document.getElementById("omsetningEtterSkatt1").innerHTML);
  	var GyldnePizzaGrunerlokka = parseInt(document.getElementById("omsetningEtterSkatt2").innerHTML);
  	var GyldnePizzaFrogner = parseInt(document.getElementById("omsetningEtterSkatt3").innerHTML);

  	var taxediv = document.getElementById("outputDiv");
  	var omsetningTotal = GyldnePizzaStoro + GyldnePizzaGronnland + GyldnePizzaGrunerlokka + GyldnePizzaFrogner;
  
  		taxediv.innerHTML = `<p>Turnover after taxes for all restaurants:</p>  ${omsetningTotal - (omsetningTotal * 0.15)} kr`;
}

/* Function where you can update existing revenue/sale values. As you can see below, we have reference variables 
to each restaunt's revenue value. The following if else statements, make it so that we can change the values
and then update the piechart at the top of the page accordingly.
*/

function skrivInnOmsetning() {
  	var GyldnePizzaStoro = document.getElementById("omsetningEtterSkatt");
  	var inputTestStoro = document.getElementById("input-test-storo").value;
  	let GyldenePizzaGrønnland = document.getElementById("omsetningEtterSkatt1");
  	let inputTestGrønnland = document.getElementById("input-test-grønnland").value;
  	let GyldenePizzaGrunerløkka = document.getElementById("omsetningEtterSkatt2");
  	let inputTestGrunerløkka = document.getElementById("input-test-grunerløkka").value;
  	let GyldenePizzaFrogner = document.getElementById("omsetningEtterSkatt3");
  	let inputTestFrogner = document.getElementById("input-test-frogner").value;

	/*Checks if input values are numbers or not */

	  if (isNaN(inputTestStoro)) 
		{
		  alert("Must input numbers");
		  return false;
		}
		if (isNaN(inputTestGrønnland)) 
		{
		  alert("Must input numbers");
		  return false;
		}
		if (isNaN(inputTestGrunerløkka)) 
		{
		  alert("Must input numbers");
		  return false;
		}
		if (isNaN(inputTestFrogner)) 
		{
		  alert("Must input numbers");
		  return false;
		}

  if (!inputTestStoro) {
    	GyldnePizzaStoro.innerHTML = 100000;  
  }
  else{
    	GyldnePizzaStoro.innerHTML = inputTestStoro;
  }

  if (!inputTestGrønnland) {
    	GyldenePizzaGrønnland.innerHTML = 120000;  
  }
  else {
    	GyldenePizzaGrønnland.innerHTML = inputTestGrønnland;
  }

  if (!inputTestGrunerløkka) {
    	GyldenePizzaGrunerløkka.innerHTML = 120000;  
  }
  else {
    	GyldenePizzaGrunerløkka.innerHTML = inputTestGrunerløkka;
  }

  if (!inputTestFrogner) {
    	GyldenePizzaFrogner.innerHTML = 120000;  
  }
  else {
    	GyldenePizzaFrogner.innerHTML = inputTestFrogner;
  }
}  

/* Function that updates the chart by checking for new values that may have been entered in the function above.*/

function updateChart(){
  	var GyldnePizzaStoro = parseInt(document.getElementById("omsetningEtterSkatt").innerHTML);
  	var GyldnePizzaGronnland = parseInt(document.getElementById("omsetningEtterSkatt1").innerHTML);
  	var GyldnePizzaGrunerlokka = parseInt(document.getElementById("omsetningEtterSkatt2").innerHTML);
  	var GyldnePizzaFrogner = parseInt(document.getElementById("omsetningEtterSkatt3").innerHTML);

    var chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true,
      	backgroundColor: "#30363d",
      
      	title: {
        	text: "Turnover per restaurant 2021",
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

/* Function that calculates the average for all restaurants. After entering a specific number of days and how much the restaurant made 
during those days, you can calculate the averaged revenue for that specific time period. */

function gjenomsnittFunction(){
  	let inputGjennomsnittStoro = document.getElementById("input-gjennomsnitt-storo").value;
  	let outputGjenomsnittStoro = document.getElementById("output-gjenomsnitt-storo");
  	let gjennomsnitsDagerStoro = document.getElementById("gjennomsnits-dager-storo").value;
  	let gjennomsnittBeregningStoro = Math.floor(inputGjennomsnittStoro/gjennomsnitsDagerStoro);
  
  	let inputGjennomsnittGrønnland = document.getElementById("input-gjennomsnitt-grønnland").value;
  	let outputGjenomsnittGrønnland = document.getElementById("output-gjenomsnitt-grønnland");
  	let gjennomsnitsDagerGrønnland = document.getElementById("gjennomsnits-dager-grønnland").value;
  	let gjennomsnittBeregningGrønnland = Math.floor(inputGjennomsnittGrønnland/gjennomsnitsDagerGrønnland); 

  	let inputGjennomsnittGrunnerløka = document.getElementById("input-gjennomsnitt-grunnerløka").value;
  	let outputGjenomsnittGrunnerløka = document.getElementById("output-gjenomsnitt-grunnerløka");
  	let gjennomsnitsDagerGrunnerløka = document.getElementById("gjennomsnits-dager-grunnerløka").value;
  	let gjennomsnittBeregningGrunnerløka = Math.floor(inputGjennomsnittGrunnerløka/gjennomsnitsDagerGrunnerløka); 

  	let inputGjennomsnittFrogner = document.getElementById("input-gjennomsnitt-frogner").value;
  	let outputGjenomsnittFrogner = document.getElementById("output-gjenomsnitt-frogner");
  	let gjennomsnitsDagerFrogner = document.getElementById("gjennomsnits-dager-frogner").value;
  	let gjennomsnittBeregningFrogner = Math.floor(inputGjennomsnittFrogner/gjennomsnitsDagerFrogner);

  		outputGjenomsnittFrogner.innerHTML = `<p>This is the resualt: ${gjennomsnittBeregningFrogner}</p>`
  		outputGjenomsnittGrønnland.innerHTML = `<p> This is the resualt: ${gjennomsnittBeregningGrønnland}</p>`
  		outputGjenomsnittStoro.innerHTML = `<p>This is the resualt: ${gjennomsnittBeregningStoro}</p>`
  		outputGjenomsnittGrunnerløka.innerHTML = `<p>This is the resualt: ${gjennomsnittBeregningGrunnerløka}</p>`
}