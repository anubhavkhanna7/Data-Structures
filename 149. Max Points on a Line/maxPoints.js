var maxPoints = function(points) {
  if (points.length === 1) return 1
  let max = 0;
  points = points.map(val => `${val[0]}_${val[1]}`)
  const pointSet = [...(new Set(points))]

  for(let i = 0; i<pointSet.length; i++) {
      let count = points.filter(val => val === pointSet[i]).length
      let map = new Map()
      for (let j = i+1; j<pointSet.length; j++) {
          const slope = calculateSlope(pointSet[i], pointSet[j])
          if (map.has(slope)) {
              map.set(slope, map.get(slope) + 1)
          } else {
              map.set(slope, count + 1)
          }
          max = Math.max(map.get(slope), max)
      }
  }

  return max
};

const calculateSlope = (pos1, pos2) => {
  pos1 = pos1.split('_')
  pos2 = pos2.split('_')
  if (Number(pos2[0]) === 0 && Number(pos1[0]) === 0) return Infinity
  return ((Number(pos2[1]) - Number(pos1[1]))/(Number(pos2[0]) - Number(pos1[0])))
}