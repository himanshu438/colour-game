var colors = generateRandomcolors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");

// init();


colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare click to pickedcolor
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
    
}
function changeColors(color)
{
    //loop through all squares
    for( var i = 0; i < squares.length; i++)
    {
    //change each color to matching given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor() 
  {
      var random = Math.floor(Math.random() * colors.length);
      return colors[random];
  }

  function generateRandomcolors(num)
  {
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
    }
    //return that array
     return arr;
  }

  function randomColor(){
      //pick a red from 0-255
      var r = Math.floor(Math.random() * 256)
      //pick a green from 0- 255
      var g = Math.floor(Math.random() * 256)
      //pick a blue from 0-255
      var b = Math.floor(Math.random() * 256)
      return "rgb(" + r +  ", " + g + ", " + b + ")";
  }

  resetButton.addEventListener("click", function(){
      //genrate all new colors
      colors = generateRandomcolors(6);
      //pick a new random color from array
      pickedColor = pickColor();
      //chamge color displayto match picked color
      colorDisplay.textContent =pickedColor;
      this.textContent = "New Colors"

      messageDisplay.textContent = "";
      //change colors of squares
      for(var i = 0; i < squares.length; i++){
          squares[i].style.backgroundColor = colors[i];
      }
  })

 

//   function init(){
//       //made buttons event listerns
//       for(var i = 0; i < modeButtons.length; i++)
//       modeButtons[i].addEventListener("click", function(){
//           modeButtons[0].classList.remove("selected");
//           modeButtons[1].classList.remove("selected");
//           this.classList.add("selected");
     
//           this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
//           reset();
//       });
//   }

//   function reset(){
//       colors = generateRandomcolors(numSquares);
//       //pick a new random color from array
//       pickedColor = pickColor();
//       //change colordisplay to match picked color
//       colorDisplay.textContent = pickedColor;
//       resetButton.textContent = "New Colors";
//   }
easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomcolors(numSquares);
    pickedColor = pickedColor;
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }


});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomcolors(numSquares);
    pickedColor = pickedColor;
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor= colors[i];
        squares[i].style.display = "block";
       
    }


});