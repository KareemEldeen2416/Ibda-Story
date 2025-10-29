const story_elements = document.getElementsByClassName("story-element");
const story_images = document.querySelectorAll(".story-element img");
// for(let i = 0 ; i < story_elements.length ;i++){
//   console.log(story_elements[i])
// }
// for(let i = 0 ; i < story_images.length ;i++){
//   console.log(story_images[i])
// }




function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index j from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

images = [
  ["learn.png" , "prayer.png","wakeup.png","school clothes.png"]
];

random_orders = shuffleArray([0,1,2,3]);
myImage = images[0]
random_image = [myImage[random_orders[0]],myImage[random_orders[1]],myImage[random_orders[2]],myImage[random_orders[3]]]
console.log(random_image);
result=[];
for(let i = 0 ; i < story_images.length;i++){
  story_images[i].setAttribute("src",random_image[i]);
}



