import { Snake } from './snake.js'
import { randomGridPosition } from './grid.js'


export class Food {
  tempSnake = new Snake;


  food = this.getRandomFoodPosition()
  growth_rate = 1 // if ate grow by one


  update() {
    if (this.tempSnake.onSnake(this.food)) {
      this.tempSnake.expandSnake(growth_rate)
      this.food = getRandomFoodPosition()
    }
  }
  draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = this.food.y
    foodElement.style.gridColumnStart = this.food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
  }

  getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || this.tempSnake.onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
  }

}