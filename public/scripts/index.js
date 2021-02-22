import * as path from './modules/paths.js';
import * as call  from './modules/functions.js'
import * as handler from './modules/handlers.js';
import {RENDER, requestGet, requestPost, requestText, userLogin, postTest} from './modules/ajax.js';



window.addEventListener('load', (e) => {
  console.log('page loaded');
  console.log(path.header);
  requestText(path.header, RENDER, '#main-header');
});



document.addEventListener('DOMContentLoaded', call.glide)
const glide = call.glide

google.charts.load('current', {
  packages:['coreChart']
}).then(call.drawChart_dash);
