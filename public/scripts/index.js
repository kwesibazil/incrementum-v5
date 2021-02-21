const indexController ='../src/controller/IndexController.php';

const loginForm = document.getElementById('login-form')
const submitBtn = document.getElementById('submit-btn');



function Request_Get (url, handler){
  fetch(url).then((response) =>{
    return response.json();
  }).then((json) => handler(json)).catch(e => console.log(e.message))
}



const USER_LOGIN = snippet => console.log(snippet);

Request_Get(indexController, USER_LOGIN);