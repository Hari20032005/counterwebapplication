
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments
let saveBtn = document.getElementById("save-btn")
let logn = document.getElementById("log-name")
let savee = document.getElementById("save-el")
console.log(countEl)

let count = 0
let names = "hariharan"

let greet = "Welcome back" 
let PreE = ""

logn.innerText = names+" "+"  " + greet + " "+"👏"

function increment() {
    count += 1
    countEl.innerText = count
}

function save(){
    let PreE = count +"  "+"-  "
    count=0
    countEl.innerText=count

   
    
   
    savee.textContent +=PreE
}


