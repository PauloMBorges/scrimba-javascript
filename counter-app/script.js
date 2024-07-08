let countEl = document.getElementById('count-el')
let count = 0
let saveEl = document.getElementById('save-el')
let history = ""

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    history = count
    saveEl.textContent += history + " - "
    count = 0
    countEl.innerText = count
}