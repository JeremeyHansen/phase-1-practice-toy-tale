//first thing first you need to get the data and render it to the dom upon a successful post
//your cards innerhtml need to have a specific set of ids and values
//you need to make an event listener on the submit of the form and then have that data rendered to the dom


let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    //not sure what this means
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
//make a GET request and a card and then make a function using a for each to get them all rendered on the dom 
//each card USING 'innerHTML.' should have an h2 tag, img tag with the src, and a p tag with how many likes, and then a button tag with a class "like-btn" and an id attribute to the toy's id number


//add an event to the form to call a function that will add a new card and prevent default of it refreshing before rendered and then reset it after so the inputed info goes away 
let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // call a function and target some value
    // addNewToy(e.target.toy_collection.value) ??
    form.reset();
  })

//make the function that is going to add the new card to the dom
  function addNewToy(newToy){

  }

function getToys(name, url) {
 fetch('http://localhost:3000/toys', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"name": `${name}`, "url": `${url}`})
    //can't remember what goes in here I know it's an object but I cant remember how to enter i think this is one way but not the most efficient
  .then(res => res.json())
  .then(data => console.log(data))
  });
}


``
//add another event for the like button that will update to the dom 
//then you need a patch function to update with the new data
//function for increasing likes on the photos needs to be applied to the like button

function incrementLikes(toys){
  let likes = 0
  fetch(`http://localhost:3000/toys${toys.id}`)
  .then(res  => res.json())
  .then(data => {
    likes = data.likes
  })

  let newLikes = likes++

  fetch('http://localhost:3000/toys/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      'likes': newLikes
    })
  })
  let likesText = `${newLikes} likes`
  return likesText

}


//okay so heres what we need to review after this lab. Rendering the cards to the dom using the for each function. Go back and review the POST syntax and how you append upon a successful post. 
//next you need to go revisit all of the lectures as they go through step by step how to do this entire lab


//you need a better understanding of the fetch, the get, the then statements, etc
//obviously you are pretty far behind where you should be so dedicate a lot of time in the next two days on these topics 
//YOU GOT THIS

