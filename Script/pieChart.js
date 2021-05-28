window.onload = function() {
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