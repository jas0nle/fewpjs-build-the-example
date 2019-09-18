// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
const errorMessage = document.getElementById("modal-message");

document.addEventListener("DOMContentLoaded", function() {
  errorModal.setAttribute("class", "hidden");
});

const emptyHearts = document.querySelectorAll(".like-glyph");

for (const heart of emptyHearts) {
  heart.addEventListener("click", (event) => {
    
    mimicServerCall()
    .then(function(event) {
      console.log(heart);
      if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = heart.className + "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch( (error) => {
      errorModal.removeAttribute("class");
      errorMessage.innerText = error.message;
      setTimeout(function(){
        errorModal.setAttribute("class", "hidden");
      }, 5000)
    })
  });
};




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
