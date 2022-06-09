let washBtn = document.getElementById("wash-btn")
let mowLawnBtn = document.getElementById("mowLawn-btn")
let pullWweedsBtn = document.getElementById("pullWweeds-btn")
let content = document.getElementById("content")

let totalPrice = document.getElementById("total-price")

let count = 0

totalPrice.textContent += count
let noteWords = document.getElementById("note-words")


washBtn.addEventListener("click", function(){
    content.innerHTML += `
 
    <p class= "wash-carjs"> Wash car</p>
    <p class = "wash-carprice"> $10</p>
  
`
noteWords.textContent = `We accept cash, credit card, or PayPal`
count = count + 10

totalPrice.textContent = "$" + count

    washBtn.disabled = true
  
}
)
mowLawnBtn.addEventListener("click", function(){
    content.innerHTML += `
   
    <p class ="mow-lawnjs"> Mow lawn</p>
    <p class = "mow-lawnprice"> $20</p>
    
   `
   noteWords.textContent = `We accept cash, credit card, or PayPal`
   count = count + 20

   totalPrice.textContent = "$" + count
   
    
    mowLawnBtn.disabled = true
  
}
)
pullWweedsBtn.addEventListener("click", function(){
    content.innerHTML += `
 
    <p class = "pull-weedsjs"> Pull weeds</p>
    <p class = "pull-weedsprice"> $30</p>
  
   `
   noteWords.textContent = `We accept cash, credit card, or PayPal`
   count = count + 30

   totalPrice.textContent = "$" + count
   
  
    pullWweedsBtn.disabled = true
}
)


