
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => {
    // do something with the value
    toys.forEach(toy => {
      renderOneToy(toy)
    })
  })


//DOM render function
function renderOneToy(toy){
  //build the toy card
  // console.log(toy);
  let card = document.createElement('div')
  card.className = 'card'
  card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar />
    <p> ${toy.likes} </p>
    <button class="like-btn" id="${toy.id}"> Like </button>
    `
  // console.log(card)
  const elementWhereToysShouldGo = document.querySelector("#toy_collection")
  elementWhereToysShouldGo.appendChild(card)

}

// //Get Data and render them to the DOM
// function initialize(){
//   toys.forEach(toy => renderOneToy(toy))
// }

// initialize();