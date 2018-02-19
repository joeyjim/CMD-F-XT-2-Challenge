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
        borderColor: "#D40E0E"
      },
      { 
        data: CO2,
        label: "CO2",
        borderColor: "#0ED4D4"
      },    
    ]
  }
});

var traveled = [70, 30];
var ctx = document.getElementById("destinationChart")
var destinationChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [
      { 
        data: traveled,
        labels: ['traveled', 'togo'],
        backgroundColor: ['#0ED4D4', '#D40E0E'],
        borderWidth: 0
      }]
  },
    options:{
        cutoutPercentage: [80],
    }
});

var food = [50, 50];
var ctx = document.getElementById("foodChart")
var destinationChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [
      { 
        data: food,
        labels: ['food', 'gone'],
        backgroundColor: ['#0ED4D4', '#D40E0E'],
        borderWidth: 0
      }]
  },
    options:{
        cutoutPercentage: [80]
    }
});

var water = [50, 50];
var ctx = document.getElementById("waterChart")
var destinationChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [
      { 
        data: water,
        labels: ['water', 'gone'],
        backgroundColor: ['#0ED4D4', '#D40E0E'],
        borderWidth: 0
      }]
  },
    options:{
        cutoutPercentage: [80]
    }
});

var countdown = document.getElementById('countdown');



