// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelectorAll('span.like-glyph')
heart.forEach( glyph => {
  glyph.addEventListener("click", (e) => {
    mimicServerCall().then(() => {
      toggleHeart(glyph)
    }).catch(() => {
      const error = document.querySelector('#modal')
      error.classList.toggle('hidden')
      setTimeout(function(){ error.classList.toggle('hidden'); }, 3000);
    })
  })
});

function toggleHeart(glyph){
  const active = glyph.classList.toggle('activated-heart');
  if (active){
    glyph.innerText = FULL_HEART
  } else {
    glyph.innerText = EMPTY_HEART
  }
};


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
