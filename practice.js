// loop
// 3  types of loop


// for loop
// let total = 5
// for ( let loop = 0; loop <=total; loop++ ){
//   console.log (loop)
// }

//   if you want for loop to run the condition must be true if you want to make it stop you have to set a condition that makes it false
// still for loop excersise : write a for loop that'll count to 1000

// let totals = 1000
// for (i = 1; i <= totals; i++) {

// Now we're going to make it print out only the odd numbers with the use of "%"

//   for (j = 2; j < i; j++) {
//     if (i % j == 0) {
//       break
//     }
//     console.log(i)
//   }
// }


let displaybg = document.querySelector(".display-bg")
let displayscode = document.querySelector(".display-code")
let generate = document.querySelector(".generate")

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

generate.addEventListener('click', function () {
  console.log(Math.floor(Math.random()*16));
  let code = "#"
  for (let i = 0; i < 6; i++) {
    let pick = array[Math.floor(Math.random())]
    console.log(pick);

    code = code + pick
  }
  console.log(code);
  displaybg.style.background = code
  displayscode.innertext = code
})


// set timeout, clear timeout, set interval, clear interval
// setTimeout(
//   function () {
//     console.log("hello")
//   }, 2000
// )
setInterval(
  function () {
        console.log("hello")
      }, 5000
)