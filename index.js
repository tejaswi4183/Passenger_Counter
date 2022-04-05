let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}
function incrementby5() {
    count += 5
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent=saveEl.textContent+countStr
    
}
function reset(){
    countEl.textContent = 0
    count = 0
    saveEl.textContent="PREVIOUS ENTRIES:"
}
console.log("Let's count people on the subway!")