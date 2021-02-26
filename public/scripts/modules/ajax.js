function requestText (url, handler, selector){
  fetch(url).then((response)=>{
    response.text().then( text => handler(selector, text)).catch( e => console.log(e))
  })
}

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


//AJAX HANDLERS
const insert = (selector, snippet) => {
  const targetElem = document.querySelector(selector);
  targetElem.innerHTML = snippet;
};


const RENDER = (selector, snippet) => {insert(selector,snippet)};


const GLIDER = (selector, snippet) => {

  insert(selector,snippet)
  console.log('look into this at a later date');
  
  //LOOK INTO THIS
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
  }).mount();
  
  
};




//EXPORT STATEMENT
export {RENDER, GLIDER, requestGet, requestPost, requestText};