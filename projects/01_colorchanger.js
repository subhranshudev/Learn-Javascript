// const grey = document.getElementById("grey")
// grey.addEventListener('click' , function(e){
//   document.body.style.backgroundColor = "grey"
// })

// const white = document.getElementById("white")
// white.addEventListener('click' , function(e){
//   document.body.style.backgroundColor = "white"
// })

// const yellow = document.getElementById("yellow")
// yellow.addEventListener('click' , function(e){
//   document.body.style.backgroundColor = "yellow"
// })

// const blue = document.getElementById("blue")
// blue.addEventListener('click' , function(e){
//   document.body.style.backgroundColor = "blue"
// })


// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// console.log(buttons)
// buttons.forEach( function(button){
//   button.addEventListener('click' , function(e){
//     if(button.id === "grey"){
//       body.style.backgroundColor = button.id
//     }
//     if(button.id === "white"){
//       body.style.backgroundColor = button.id
//     }
//     if(button.id === "blue"){
//       body.style.backgroundColor = button.id
//     }
//     if(button.id === "yellow"){
//       body.style.backgroundColor = button.id
//     }

//   })
// } )


const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
  button.addEventListener('click' , (e) => {
    // console.log(typeof e)
    // console.log(e.target)

    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
  })
})


// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// buttons.forEach( (button) => {
//   button.addEventListener('click' , (e) => {
//     console.log(e.target)
    
//     switch(e.target.id){
//       case "grey":
//         body.style.backgroundColor = e.target.id
//         break;
//       case "white":
//         body.style.backgroundColor = e.target.id
//         break;
//       case "blue":
//         body.style.backgroundColor = e.target.id
//         break;
//       case "yellow":
//         body.style.backgroundColor = e.target.id
//         break;
//     }
   
//   })
// })