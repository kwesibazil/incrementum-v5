// export const glide= new Glide('.glide', {
//   type: 'slider',
//   perView: 2,                     
//   swipeThreshold: 40,
//   dragThreshold: 60,
//   peek: {
//     before: 0,
//     after: 150
//   },

//   breakpoints: {
//     355: {
//       perView: 1
//     },
//     576:{                         //settings valid  for sizes below breakpoint    for more info - https://glidejs.com/docs/options/
//       perView: 1,
//       peek: {
//         before: 0,
//         after: 200
//       }
//     },
//     700: {                        
//       perView: 1,
//       peek: {
//         before: 0,
//         after: 170
//       }
//     },
//   }
// }).mount()



export function drawChart_dash() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Goal', { role: "style" }],
    ['Mon',  7, 'color: #1D3D59; opacity: 0.9'],
    ['Sun',  5, 'color: #1D3D59; opacity: 0.9'],
    ['Tue', 15, 'color :#1D3D59; opacity: 0.9'],
    ['Wed',  5, 'color: #1D3D59; opacity: 0.9'],
    ['Thur', 2, 'color: #1D3D59; opacity: 0.9'],
    ['Fri',  10, 'color:#1D3D59; opacity: 0.9'],
    ['Sat',  5, 'color: #1D3D59; opacity: 0.9']
  ]);

  var options = {
    bar: {groupWidth: "70%"},
    chartArea:{
      left:10,
      top: 15,
      bottom: 16,
      right: 10,
      width: '90%'
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(data, options);
  window.addEventListener('resize', drawChart_dash, false);
}


export function addClass(element, target){
  element.classList.add(target)
}



