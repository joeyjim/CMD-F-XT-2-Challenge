// Our labels along the x-axis
var time = [1500,1600,1700,1800,1900,2000, 2100, 2200, 2300, 2400];
// For drawing the lines
var normal = [22,22,22,22,22,22,22,22,22,22];
var CO2 = [22,23,22,24,23,25,19,16,20,25];

var ctx = document.getElementById("oxygenChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: time,
    datasets: [
      { 
        data: normal,
        label: "normal",
        borderColor: "#D40E0E",
        fill: false
      },
      { 
        data: CO2,
        label: "CO2",
        borderColor: "#0ED4D4",
        fill: false
      },    
    ]
  }
});

 var destChart = document.getElementById('destinationChart').easyPieChart;
var myDestChart = new Chart(destChart, {
 
    scaleColor: "#ecf0f1",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#1abc9c',
    trackColor:	"#ecf0f1",
    size: 160,
    animate: 500
});