import { getInputDirection } from "./input.js"




export class Snake {



  snakeBody = [{ x: 11, y: 11 }]
  newSegments = 0

  update() {
    this.addSegments()

    const inputDirection = getInputDirection()
    for (let i = this.snakeBody.length - 2; i >= 0; i--) {
      this.snakeBody[i + 1] = { ...snakeBody[i] }
    }

    this.snakeBody[0].x += inputDirection.x
    this.snakeBody[0].y += inputDirection.y
  }

  draw(gameBoard) {
    this.snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = segment.y
      snakeElement.style.gridColumnStart = segment.x
      snakeElement.classList.add('snake')
      gameBoard.appendChild(snakeElement)
    })
  }

  expandSnake(amount) {
    newSegments += amount
  }

  onSnake(position, { ignoreHead = false } = {}) {
    return this.snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return this.equalPositions(segment, position)
    })
  }

  getSnakeHead() {
    return this.snakeBody[0]
  }

  snakeIntersection() {
    return this.onSnake(this.snakeBody[0], { ignoreHead: true })
  }

  equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
  }

  addSegments() {
    for (let i = 0; i < this.newSegments; i++) {
      this.snakeBody.push({ ...this.snakeBody[this.snakeBody.length - 1] })
    }

    this.newSegments = 0
  }
}


// export const SNAKE_SPEED = 5


// const snakeBody = [{ x: 11, y: 11 }]
// let newSegments = 0

// export function updateSnake() {
//   addSegments()

//   const inputDirection = getInputDirection()
//   for (let i = snakeBody.length - 2; i >= 0; i--) {
//     snakeBody[i + 1] = { ...snakeBody[i] }
//   }

//   snakeBody[0].x += inputDirection.x
//   snakeBody[0].y += inputDirection.y
// }

// export function draw(gameBoard) {
//   snakeBody.forEach(segment => {
//     const snakeElement = document.createElement('div')
//     snakeElement.style.gridRowStart = segment.y
//     snakeElement.style.gridColumnStart = segment.x
//     snakeElement.classList.add('snake')
//     gameBoard.appendChild(snakeElement)
//   })
// }

// export function expandSnake(amount) {
//   newSegments += amount
// }

// export function onSnake(position, { ignoreHead = false } = {}) {
//   return snakeBody.some((segment, index) => {
//     if (ignoreHead && index === 0) return false
//     return equalPositions(segment, position)
//   })
// }

// export function getSnakeHead() {
//   return snakeBody[0]
// }

// export function snakeIntersection() {
//   return onSnake(snakeBody[0], { ignoreHead: true })
// }

// function equalPositions(pos1, pos2) {
//   return pos1.x === pos2.x && pos1.y === pos2.y
// }

// function addSegments() {
//   for (let i = 0; i < newSegments; i++) {
//     snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
//   }

//   newSegments = 0
// }