// Line Chart
var salesData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Front",
      fillColor: "rgba(195, 40, 96, 0.1)",
      strokeColor: "rgba(195, 40, 96, 1)",
      pointColor: "rgba(195, 40, 96, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [3400, 3000, 2500, 4500, 2500, 3400, 3000]
    },
    {
      label: "Middle",
      fillColor: "rgba(255, 172, 100, 0.1)",
      strokeColor: "rgba(255, 172, 100, 1)",
      pointColor: "rgba(255, 172, 100, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [1900, 1700, 2100, 3600, 2200, 2500, 2000]
    },
    {
      label: "Back",
      fillColor: "rgba(19, 71, 34, 0.3)",
      strokeColor: "rgba(88, 188, 116, 1)",
      pointColor: "rgba(88, 188, 116, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [1000, 1400, 1100, 2600, 2000, 900, 1400]
    }
  ]
};
var ctx = document.getElementById("accountData").getContext("2d");
window.myLineChart = new Chart(ctx).Line(salesData, {
  pointDotRadius : 6,
  pointDotStrokeWidth : 2,
  datasetStrokeWidth : 3,
  scaleShowVerticalLines: false,
  scaleGridLineWidth : 2,
  scaleShowGridLines : true,
  scaleGridLineColor : "rgba(225, 255, 255, 0.02)",
  scaleOverride: true,
  scaleSteps: 9,
  scaleStepWidth: 500,
  scaleStartValue: 0,

  responsive: true

});

//Credit Sales
var creditSales = new ProgressBar.Circle('#creditSales', {
  color: '#e81760',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var channelSales = new ProgressBar.Circle('#channelSales', {
  color: '#e88e3c',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var directSales = new ProgressBar.Circle('#directSales', {
  color: '#2bab51',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
creditSales.animate(0.8);
channelSales.animate(0.64);
directSales.animate(0.34);