
let addToy = false;
//loadingToys function to declare later

const loadToys = () => {
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => {
      toys.forEach(toy => {
        renderToys(toy)
      })
    });
}

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
  
  
  // call the function inside of DOMContentLoaded
  loadToys()
  setupForm()
});


const incrementLikes = e => {
  e.preventDefault()
  const button = e.target
  const p = button.previousElementSibling
  const currentLikeCount = parseInt(p.innerHTML)
  const newLikeCount = currentLikeCount + 1

  fetch(`http://localhost:3000/toys/${button.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "likes": newLikeCount
    })
  })
  .then((response) => response.json())
  .then(response => {
    p.innerHTML = response.likes
  })
}

//DOM render function
function renderToys(toy){
  //build the toy card
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar" />
    <p>${toy.likes}</p>
    <button class="like_btn" id="${toy.id}"> Like </button>
    `
  document.querySelector("#toy_collection").appendChild(card)
  card.querySelector('.like_btn').addEventListener('click', incrementLikes)
}


function setupForm() {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": form.name.value,
        "image": form.image.value,
        "likes": 0
      })
    })
    .then((response) => response.json())
    .then(() => loadToys())
  })
}


