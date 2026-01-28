let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')

button.addEventListener("click", function(){
    let li = document.createElement('li')
    li.innerText = input.value;

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('delete')
    
    li.append(deleteBtn)
    ul.append(li)

    input.value = ""
});

// let deleteBtns = document.querySelectorAll(".delete")
// for(deleteBtn of deleteBtns){
//     deleteBtn.addEventListener("click", function () {
//         let parent = this.parentElement
//         console.log("Element deleted")
//         parent.remove()
//     });
// }

// Event Delegation
ul.addEventListener("click", function (event) {
  console.log("Button Clicked!");
  console.log(event.target);
  let listItem = event.target.parentElement;
  listItem.remove();
});
