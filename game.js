import { outsideGrid } from './grid.js'
import { Food } from './food.js'
import { Snake } from "./snake.js"

let snake_speed = 5;

let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board')

let tempSnake = new Snake;
let tempFood = new Food;


function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snake_speed) return


  lastRenderTime = currentTime

  _update()
  _draw()
}

window.requestAnimationFrame(main)

function _update() {
  tempSnake.update()
  tempFood.update()
  checkDeath()
}

function _draw() {
  gameBoard.innerHTML = ''
  tempSnake.draw(gameBoard)
  tempFood.draw(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(tempSnake.getSnakeHead()) || tempSnake.snakeIntersection()
}