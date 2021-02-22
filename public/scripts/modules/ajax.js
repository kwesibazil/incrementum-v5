import * as path from './paths.js';

function requestGet (url, handler){
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

function requestPost (url, handler, data){
  postData(url, data).then((response) => handler(response)).catch(e => console.log(e.message));
}


//HANDLERS
const userLogin = (snippet) => {
  console.log("in the handler");
  console.log(snippet);
}

const postTest = (snippet) => {
  console.log("in the handler");
  console.log(snippet);
};


//EXPORT STATEMENT
export {requestGet, requestPost, userLogin, postTest};