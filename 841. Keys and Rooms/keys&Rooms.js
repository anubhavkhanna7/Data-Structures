var canVisitAllRooms = function(rooms) {
  let visited = new Array(rooms.length).fill(false), keys = []
  visited[0] = true
  keys.push(...rooms[0])
  while(keys.length > 0) {
      const popKey = keys.pop()
      visited[popKey] = true
      const roomVal = rooms[popKey].filter(room => !visited[room])
      if (roomVal.length) {
          keys.push(...roomVal)
      }
  }
  return visited.reduce((acc,val) => acc && val, true)

};