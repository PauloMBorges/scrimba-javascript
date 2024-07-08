let countEl = document.getElementById('count-el')
let count = 0
let saveEl = document.getElementById('save-el')
let history = ""
let incrementBtn = document.getElementById('increment-btn')
incrementBtn.addEventListener('click', increment)
let decrementBtn = document.getElementById('decrement-btn')
decrementBtn.addEventListener('click', decrement)
let saveBtn = document.getElementById('save-btn')
saveBtn.addEventListener('click', save)

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

function save() {
    history = count
    saveEl.textContent += history + " / "
    count = 0
    countEl.innerText = count
}