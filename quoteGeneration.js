// quotes dictionary
const quotes = [
  {quote:"You're doing great", author:"Taku Alguire"},
  {quote:"Keep it up, you got this in the bag", author:"Stefani Georgievska"},
  {quote:"Heck yeah! You are doing a great job.", author:"Jesse McCartney"},
  {quote:"Keep at it, you are almost at the finish line.", author:"Oprah Winfrey"},
  {quote:"Great job, I want this to be shown on two lines.", author:"Frank Sinatra"},
  {quote:"Dream huge", author:"Minami Alguire"},
  {quote:"Stay positive", author:"Megan Hoggart"}
]

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
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function generateRandomColour() {
  return colours[Math.floor(Math.random()*colours.length)];
}

function newQuote() {
  let randomQuote = generateRandomQuote();
  let randomColour = generateRandomColour();

  // prepopulate tweet
  $('#tweet-quote').prop('href', "https://twitter.com/intent/tweet?text=" +
                        encodeURIComponent('"' + randomQuote.quote + '" -' + randomQuote.author));
  
  // change quote
  $('.quote-text').animate(
    {opacity: 0}, 550, function() {
      $(this).animate({opacity: 1}, 550);
      $('#text').text(randomQuote.quote);
    }
  );
  
  $('.quote-author').animate(
    {opacity: 0}, 550, function() {
      $(this).animate({opacity: 1}, 550);
      $('#author').text(randomQuote.author);
    }
  );
  
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
