document.getElementById("button").innerHTML = "click here";
var list = ["Luke Chiang", "Photoshoots", "$100+ perfume", "KWK", "Garlic Bread", "ALmond Milk", "SDPT on Facebook", "Goldfish", "Estonia", "Not Being Cold"];
var button = document.getElementById("button");

// function getItem () {
//   alert("You have generated a random item!");
//   document.write(list[Math.floor(Math.random() * 10)]);
// }

function randNum(){
  var rand = Math.random();
  var random = rand * list.length;
  var randomNum = Math.floor(random);
  return randomNum;
}

button.addEventListener("click", function(){
  document.querySelector("h1").innerHTML = (list[randNum()]);
  document.querySelector("h1").style.padding = "50px 0px 0px 0px";
});
