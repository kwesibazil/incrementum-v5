import * as path from './paths.js';
import {requestGet, requestPost, userLogin, postTest} from './ajax.js';

// submitBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   Request_Get(indexController, USER_LOGIN);
// })

//LOGIN FORM 
path.loginForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  value.route = '/login';
  requestPost(path.indexController, postTest, value);
})
