let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  (()=>{
    const something = document.getElementById("main-title")
    something.innerText = "Welcome";
    const body = document.querySelector('body')
    body.style.backgroundColor = "red";
    const list = document.getElementById("favorite-things")
    list.removeChild(list.lastElementChild);
    const specials = document.getElementsByClassName('special-title')
    for (let i = 0; i < specials.length; i++) {
      specials[i].style.fontSize = "2rem"
    }
    const past = document.getElementById("past-races")
    past.removeChild(past.childNodes[2])
    const london = document.createElement("li")
    london.innerText = "San Fran"
    past.appendChild(london)
    const blog = document.createElement("div")
    blog.className = "blog-post purple"
    const title = document.createElement("h1")
    title.innerText = "San Fran"
    const text = document.createElement("p")
    text.innerText = "Apparently in Cali"
    blog.appendChild(title)
    blog.appendChild(text)
    const blogList = document.querySelector(".main")
    blogList.insertBefore(blog, blogList.children[4]);
  })()
  // Part 2
 
  // Part 3

  // Part 4

  // Part 5

  // Part 6

  // Part 7
}
