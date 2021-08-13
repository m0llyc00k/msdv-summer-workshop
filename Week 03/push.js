var firstPage=data.slice(0,5);

var container=document.querySelector('#container');

container.innerHTML = firstPage.map(
    (item) => {
        return `<h3>${item.title} ----- ${item.release_date}</h3>
     <h4> <b>Director:</b> ${item.director}<h4></br>
     <h4> <b>Producer:</b> ${item.producer}</h4></br>
     <p> ${item.description} </p>
     <hr>`;
    }
    ).join('');


var button = document.querySelector('#next');
var counter = 0;
var visibleMovies = []

button.addEventListener('click', (event)=> {
  if(data[counter]){
  visibleMovies.push(data[counter]);
  render (visibleMovies);
  } else {
    button = event.target;
    button.disabled = true;
  }
  counter++;
});

function render(arr) {
var container=document.querySelector('#container');
container.innerHTML = arr.map(
    (item) => {
        return `<h3>${item.title} ----- ${item.release_date}</h3>
     <h4> <b>Director:</b> ${item.director}<h4></br>
     <h4> <b>Producer:</b> ${item.producer}</h4></br>
     <p> ${item.description} </p>
     <hr>`;
    }
    ).join('');

}



