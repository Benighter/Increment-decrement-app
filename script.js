let counterNum = document.getElementById("counter-num")
let count = 0

function increment() {
    count++
    counterNum.innerText = count
}
function decrement() {
    count--
    counterNum.innerText = count
}

function reset() {
    count = 0
    counterNum.innerText = count
}