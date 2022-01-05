let quote;
const colours = [
       "#0b2545",
       "#2a555a",
       "#48846e",
       "#484365",
       "#856084",
       "#34645b",
       "#5da271",
       "#f79d65",
       "#EA526F"
]

function generateRandomQuote() {
  return $.ajax({
      url: 'https://api.kanye.rest/',
      success: function (jsonQuote) {
        quote = jsonQuote.quote;
      }
    })
}

function generateRandomColour() {
  return colours[Math.floor(Math.random()*colours.length)];
}

function newQuote() {
  let randomColour = generateRandomColour();
  let randomQuote = generateRandomQuote().then(() => {
      updatePage(randomColour);
    }
  )
}
  
function updatePage(randomColour) {
  $('#tweet-quote').prop('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" - Kayne West' ));
  // change quote
  $('.quote-text').animate(
    {opacity: 0}, 550, function() {
      $(this).animate({opacity: 1}, 550);
      $('#text').text(quote);
    }
  )
  // change colours
  $('html body').animate(
    {backgroundColor: randomColour,
    color: randomColour}, 1100
    )
  $('.button').animate(
  {backgroundColor: randomColour}, 1100)
}

$(document).ready(function() {
  newQuote();
  $('#new-quote').on('click', newQuote);
});