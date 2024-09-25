var cleanRoom = function(robot) {
  const directionSet = [
      [-1,0], // move top, reduce x-index 
      [0,1], // move right, increase y-index 
      [1,0], // move down, increase x-index 
      [0,-1], // move left, reduce y-index 
  ]

  const visited = new Set() // track visited and cleaned positions
  const returnPositionKey = (x,y) => `${x}_${y}`

  const moveAndClean = (x, y, direction) => {
      robot.clean()
      visited.add(returnPositionKey(x,y))

      for(let i = 0; i<4; i++) {
          let newDirection = (direction+i)%4
          let newX = x + directionSet[newDirection][0]
          let newY = y + directionSet[newDirection][1]

          if (!visited.has(returnPositionKey(newX, newY)) && robot.move()) {
              moveAndClean(newX, newY, newDirection)

              // reset robot position and direction
              robot.turnRight()
              robot.turnRight()
              robot.move()
              robot.turnRight()
              robot.turnRight()
          }

          robot.turnRight();
      }
  }

  moveAndClean(0,0,0)
};