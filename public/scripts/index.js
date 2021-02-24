import * as path from './modules/paths.js';
import * as call  from './modules/functions.js'
import * as handler from './modules/handlers.js';
import {RENDER, requestGet, requestPost, requestText, userLogin, postTest} from './modules/ajax.js';











window.addEventListener('DOMContentLoaded', (e) => {
  requestText(path.header, RENDER, '#main-header');
  requestText(path.sideNav, RENDER, '#main-SideNav');
  //requestText(path.mainGlider, RENDER, '#main-glider-slides');
  
});



const glide= new Glide('.glide', {
  type: 'slider',
  perView: 2,                     
  swipeThreshold: 40,
  dragThreshold: 60,
  peek: {
    before: 0,
    after: 150
  },

  breakpoints: {
    355: {
      perView: 1
    },
    576:{                         //settings valid  for sizes below breakpoint    for more info - https://glidejs.com/docs/options/
      perView: 1,
      peek: {
        before: 0,
        after: 200
      }
    },
    700: {                        
      perView: 1,
      peek: {
        before: 0,
        after: 170
      }
    },
  }
}).mount()



// document.addEventListener('DOMContentLoaded', () =>{
  
//   console.log('about to call glide');
//   console.log(call.glide);
// });



google.charts.load('current', {
  packages:['coreChart']
}).then(call.drawChart_dash);
