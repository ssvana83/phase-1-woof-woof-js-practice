//start with a DOMContentLoaded EventListener. all the code will
//go inside of this:
//STEP2: add pups to dog bar by adding a div. save to a variable so we can access
// STEP#: When a user clicks on a pup's `span` in the `div#dog-bar`, that pup's info
// (`image`, `name`, and `isGoodDog` status) should show up in the `div` with the
// id of `"dog-info"`. Display the pup's info in the `div` with the following
// elements:
// - an `img` tag with the pup's image url
// - an `h2` with the pup's name
// - a `button` that says `"Good Dog!"` or `"Bad Dog!"` based on whether
//   `isGoodDog` is true or false. Ex:

document.addEventListener("DOMContentLoaded", () => {
  //document.getElementById("dog-bar"). this grabs the element we need but we need to make it a variable 
  //so we can reference it throughout our code:
  const dogBar = document.getElementById("dog-bar")
  const dogInfoDiv = document.querySelector("#dog-info")
  console.log(dogInfoDiv)
  const url = "http://localhost:3000/pups"; //this makes the URL a variable i can grab
  fetchDogs()  //this invokes the function
  

  function fetchDogs(){  //this function fetches all of the dogs
    fetch(url)
    .then(response => response.json())
    .then(renderDogBar)
  }


  function renderDogBar(dogs) { //this function renders/uses all the dogs,puts on the bar
    dogs.forEach(addDogToDogBar)
  }


  function addDogToDogBar(dog) { //this function adds one dog to the bar (span)
    const span = document.createElement("span")
    span.innerText = dog.name
    span.setAttribute("data-id", dog.id) //set data id's to spans
    // console.log(span)
    span.addEventListener("click", showDogInfo)
    dogBar.append(span)
    
  }

  function showDogInfo(event) {
    const dogId = event.target.dataset.id //event.target gives us the thing we click on
    // console.log(event.target.getAttribute("data-id"))
    fetch(`http://localhost:3000/pups/${dogId}`)
    .then(response => response.json())
    .then(dog => {
      const goodOrBad = dog.isGoodDog ? "Good dog!" : "Bad Dog!"
      dogInfoDiv.innerHTML = `<img src="${dog.image}">
      <h2>${dog.name}</h2>
      <button data-id = ${dog.id}>${goodOrBad}</button>`
      const button = document.querySelector('#dog-info-button')

      button.addEventListener("click", toggleDog)
    })

    function toggleDog(event) {

    }
  }













})