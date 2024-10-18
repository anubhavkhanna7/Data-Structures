var mergeTriplets = function (triplets, target) {
  const compareTriplets = (triplet1, triplet2) => {
    if (triplet1[0] == triplet2[0] && triplet1[1] == triplet2[1] && triplet1[2] == triplet2[2]) return 0

    let i = 0
    for (i; i <= 2; i++) {
      if (triplet1[i] !== triplet2[i]) break
    }

    return triplet1[i] > triplet2[i] ? 1 : -1
  }

  const isTripletValid = (triplet) => {
    if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) return false

    return true
  }

  let currentTriplet = [0, 0, 0]

  for (let i = 0; i < triplets.length; i++) {
    const newTriplet = [Math.max(triplets[i][0], currentTriplet[0]), Math.max(triplets[i][1], currentTriplet[1]), Math.max(triplets[i][2], currentTriplet[2])]
    if (!isTripletValid(newTriplet)) continue
    currentTriplet = newTriplet
  }

  return compareTriplets(currentTriplet, target) === 0
};