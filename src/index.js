let addToy = false

// 1 Access the list (fetch) of toys from an API (mocked using JSON Server) and render each of them in a "card" on the page

// 2 Hook up a form that enables users to add new toys. Create an event listener so that, when the form is submitted, the new toy is persisted to the database and a new card showing the toy is added to the DOM
// 3 Create an event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, the number of likes should be updated in the database and the updated information should be rendered to the DOM

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn")
  const toyFormContainer = document.querySelector(".container")
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyFormContainer.style.display = "block"
    } else {
      toyFormContainer.style.display = "none"
    }
  })
})

// accessing toys with fetch
const fetchToys = function () {
  return fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((json) => makeCard(json))
}
function makeCards(toy) {
  const cardDiv = document.querySelector(".toyCollection")
  cardDiv.innerHTML = `<h2>${toy.name}</h2>
  <img src="http://localhost:3000/${toy.id}" class="toy-avatar" />
  <p>4 ${toy.likes}</p>
  <button class="like-btn" id="[toy_id]">Like ❤️</button>
</div>`
}
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!")
//     console.log(error.message)
//   })
// const makeCard = () => {
//   fetch (http://localhost:3000/toys/1)
// }
