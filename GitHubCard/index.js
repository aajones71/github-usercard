/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/aplusdigitalmedia
*/

const cards = document.querySelector(".cards");
axios
.get("https://api.github.com/users/aplusdigitalmedia")
  .then(response => {
    console.log(response)
     
      cards.appendChild(gitCard(response.data))
    })
    .catch(error => {
    console.log("Error", error)
  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
function gitCard(name, location, avatar_url, followers){
  const
    newCard = document.createElement("div"),
    newImg = document.createElement("img"),
    card_info =document.createElement("div"),
    newName = document.createElement("h2"),
    newLocation = document.createElement("p"),
    newFollowers = document.createElement("p");

    newImg.setAttribute("src", avatar_url)
    newName.textContent = name;
    newLocation.textContent = location;
    newFollowers.textContent = `Followers: ${followers}`;
    newCard.classList.add("card");
    newName.classList.add("name");

    newCard.appendChild(newImg)
    newImg.appendChild(card_info)
    card_info.appendChild(newName)
    card_info.appendChild(newLocation)
    card_info.appendChild(newName)
   

    return newCard;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
