var numSquares = 6
var colors = []
var pickedColor

var h1 = document.querySelector('h1')
var squares = document.querySelectorAll('.square')
var message = document.querySelector('#message')
var colorDisplay = document.getElementById('colorDisplay')
var resetButton = document.querySelector('#reset')
var modeButtons = document.querySelectorAll('.mode')

init()

function init () {
  setUpModeButtons()
  setUpSquares()
  reset()
}

function setUpModeButtons () {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected')
      modeButtons[1].classList.remove('selected')
      this.classList.add('selected')
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6
      reset()
    })
  };
};

function setUpSquares () {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      ;
      // grab color of picked square and compare to random generated
      if (this.style.backgroundColor === pickedColor) {
        message.textContent = 'Correct'
        resetButton.textContent = 'Play Again'
        changeAllColors(pickedColor)
        h1.style.backgroundColor = pickedColor
      } else {
        this.style.backgroundColor = '#232323'
        message.textContent = 'Wrong Color!'
      };
    })
  };
};

resetButton.addEventListener('click', function () {
  reset()
})

function reset () {
  // reset h1 background
  h1.style.backgroundColor = 'steelblue'
  // reset  text
  message.textContent = ''
  resetButton.textContent = 'New Colors'
  // generate all new colors
  colors = generateRandomColors(numSquares)
  // pick new color
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  // change colors of squares on page
  for (var i = 0; i < squares.length; i++) {
    // add initial colors
    if (colors[i]) {
      squares[i].style.display = 'block'
      squares[i].style.backgroundColor = colors[i]
      // add click listeners
    } else {
      squares[i].style.display = 'none'
    }
  };
};

function changeAllColors (color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
};

function pickColor () {
  return colors[Math.floor(Math.random() * colors.length)]
};

function generateRandomColors (num) {
  var colors = []
  for (var i = 0; i < num; i++) {
    colors.push(randomColor())
  }
  return colors
};

function randomColor () {
  colorString = 'rgb('
  for (var j = 0; j < 2; j++) {
    colorString += String(Math.floor(Math.random() * 256))
    colorString += ', '
  }
  colorString += String(Math.floor(Math.random() * 256))
  colorString += ')'
  return colorString
};
