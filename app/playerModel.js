export class playerModel {
  constructor() {
    console.log(this)
    this.positionX = 0
    this.positionY = 0
    this.velocityX = 0
    this.velocityY = 0
    this.jumpAcceleration = 10
    this.gravity = - 1
    setInterval(updatePhysics,100, this)
  }

  move(direction) {
    console.log('position X: ',this.positionX)
    console.log('position Y: ',this.positionY)
    if((direction === 'right') && playerNotAtRightEdge(this)){
      this.positionX += 1
    } else if((direction === 'left') && playerNotAtLeftEdge(this)){
      this.positionX -= 1
    } else if((direction === 'up') && playerNotAtTopEdge(this)){
       jump(this)
    } else if((direction === 'down') && playerNotAtBottomEdge(this)){
      this.positionY -= 1
    }
  }
}

function jump(player) {
  console.log("P-X:",player.positionX)
  player.velocityY += player.jumpAcceleration
  console.log(player.positionY)
}

function updatePhysics(player) {
  player.positionY += player.velocityY
  player.positionX += player.velocityX
  console.log(player)
  applyGravity(player)
}

function applyGravity(player) {
  if(player.positionY < 0) {
    player.velocityY = 0
    player.positionY = 0
    return
  }
  player.velocityY += player.gravity
}

function playerNotAtRightEdge(player) {
  return player.positionX !== 147
}

function playerNotAtLeftEdge(player) {
  return player.positionX !== 0
}

function playerNotAtTopEdge(player) {
  return player.positionY <= 55
}

function playerNotAtBottomEdge(player) {
  return player.positionY >= 0
}
