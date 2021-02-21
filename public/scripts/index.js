const indexController ='../src/controller/IndexController.php';
const loginForm = document.getElementById('login-form')
const submitBtn = document.getElementById('submit-btn');


const USER_LOGIN = snippet => console.log(snippet);
const Post_Example = snippet => console.log(snippet);

function Request_Get (url, handler){
  fetch(url).then((response) =>{
    return response.json();
  }).then((json) => handler(json)).catch(e => console.log(e.message))
}



async function postData(url, data){
  const response= await fetch(url,{
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers:{'Content-type': 'application/json'},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json();
}

function Request_Post (url, handler, data){
  postData(url, data).then(response => {
    console.log(response);
    handler(response);
  });
}






// submitBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   Request_Get(indexController, USER_LOGIN);
// })


//get form data
loginForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  Request_Post(indexController, Post_Example, value);
  //console.log(value)
})



// {
//   "email":"",
//   "password":""
// }

// { "id":1,
//   "email":"test@gmail.com",
//   "password":"password",
//   "admin":0
// }


