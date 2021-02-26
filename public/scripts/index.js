import * as  call from './modules/functions.js'
import  {RENDER, GLIDER, requestGet, requestPost, requestText} from './modules/ajax.js';


//ROUTER PATH
const indexController ='../src/controller/IndexController.php';

//HTML TEMPLATES PATHS
const templates = '../templates/';
const layout = templates + 'layout.php';
const header = templates + 'header.php';
const sideBar = templates + 'collapse-sidebar.php';
const glider = templates + 'dashboard/glider.php';
const goalList = templates + 'dashboard/goal-list.php';

 //DOM PATHS
const init = () =>{
  const collapseSidebar = document.getElementById("collapse-SideNav");
  const loginForm = document.getElementById('login-form')
  const submitBtn = document.getElementById('submit-btn');
  const toggleBtn = document.getElementById("toggler-icon");
  const mainLayout = document.getElementById('main-layout'); 

  toggleBtn.addEventListener('click', () => {
    if (collapseSidebar.classList.contains("hidden"))
      collapseSidebar.classList.remove("hidden");
    else
      collapseSidebar.classList.add(toggleBtn.getAttribute("data-bs-relatedTarget"));
  });

}

setTimeout(init, 1000);

const mainContent = () =>{
  requestText(glider, GLIDER , '#main-glider-slides');
  requestText(goalList, RENDER, '#main-goal-list');

}


window.addEventListener('DOMContentLoaded', (e) => {
  requestText(header, RENDER, '#main-header');
  requestText(sideBar, RENDER, '#collapse-SideNav');
  mainContent();
});



google.charts.load('current', {
  packages:['coreChart']
}).then(call.drawChart_dash);


