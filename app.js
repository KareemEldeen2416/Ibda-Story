const story_elements = document.getElementsByClassName("story-element");
const story_images = document.querySelectorAll(".story-element img");
const story_buttons = document.querySelectorAll(".story-element button");
const final_result = document.querySelector(".final-result label");
const confirm_button = document.querySelector("#submit");
console.log(story_buttons);
// for(let i = 0 ; i < story_elements.length ;i++){
//   console.log(story_elements[i])
// }
// for(let i = 0 ; i < story_images.length ;i++){
//   console.log(story_images[i])
// }



function clear_buttons(start,end){
  for(let i = start; i <= end; i++){
    story_buttons[i].classList.remove("selected");
  }
}



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index j from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let images = [
  ["wakeup.png" , "prayer.png","school clothes.png","learn.png"]
];

let random_orders = shuffleArray([0,1,2,3]);
let myImage = images[0]
let random_image = [myImage[random_orders[0]],myImage[random_orders[1]],myImage[random_orders[2]],myImage[random_orders[3]]]
console.log(random_image);
console.log(random_orders)
let result=[0,0,0,0];
for(let i = 0 ; i < story_images.length;i++){
  story_images[i].setAttribute("src",random_image[i]);
}

for(let i = 0 ; i <= 3; i++){
  story_buttons[i].addEventListener("click",function(e){
    clear_buttons(0,3);
    story_buttons[i].classList.add("selected");
    result[0] = i;
    console.log(result);
  });
}
for(let i = 4 ; i <= 7; i++){
  story_buttons[i].addEventListener("click",function(e){
    clear_buttons(4,7);
    story_buttons[i].classList.add("selected");
    result[1] = i-4;
    console.log(result);

  });
}
for(let i = 8 ; i <= 11; i++){
  story_buttons[i].addEventListener("click",function(e){
    clear_buttons(8,11);
    story_buttons[i].classList.add("selected");
    result[2] = i-8;
    console.log(result);

  });
}
for(let i = 12 ; i <= 15; i++){
  story_buttons[i].addEventListener("click",function(e){
    clear_buttons(12,15);
    story_buttons[i].classList.add("selected");
    result[3] = i-12;
    console.log(result);

  });
}



function confirm(){
  let equal = true;
  let arr1 = [1,2,1,4];
  let arr2 = [1,2,3,4];
  for(let i = 0 ; i < arr1.length;i++){
    if(result[i] != random_orders[i]){
      equal = false;
      break;
    }
  }
  if(equal){
    final_result.classList.remove("correct");
    final_result.classList.remove("wrong");
    final_result.classList.add("correct");
    final_result.innerText = "!أحسنت"
  }else{
    final_result.classList.remove("correct");
    final_result.classList.remove("wrong");
    final_result.classList.add("wrong");
    final_result.innerText = "حاول مرة أخري..أثق أنك سوف تفعلها يا صديقي"
  }
}
console.log(confirm_button.innerText)
confirm_button.addEventListener("click",confirm);



