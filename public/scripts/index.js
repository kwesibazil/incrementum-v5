const indexController ='../src/controller/IndexController.php';

const submitBtn = document.getElementById('submit-btn');
console.log(submitBtn);


fetch(indexController).then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json)
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});


