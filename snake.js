import { getInputDirection } from "./input.js"


export class Snake {

  snakeBody = [{ x: 13, y: 13 }]
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