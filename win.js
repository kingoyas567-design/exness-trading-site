let add = document.querySelector(".add")
let minus = document.querySelector(".minus")
let count = document.querySelector(".count")

console.log(add)
console.log(minus)
console.log(count)
let total = 10

add.addEventListener('click', function () {
    console.log("Add buttton was clicked");
    count.innerText = Number(count.innerText) + 1
    if (count.innerText >= total) {
        count.innerText = 10
    }
    console.log("Add buttton was clicked");
    console.log (add.innerText)
})



minus.addEventListener('click', function () {
    console.log("Minus buttton was clicked");
    count.innerText = Number(count.innerText) - 1
    if (count.innerText <= 0) {
        count.innerText = 0
    }
})





