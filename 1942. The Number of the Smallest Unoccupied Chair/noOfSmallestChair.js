// O(n^2) Solution
var smallestChair = function (times, targetFriend) {
  let itemToMatch = times[targetFriend].join('-')
  let intervalsUsed = []

  times = times.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < times.length; i++) {
    let indexOfChairUsed = -1
    for (let j = 0; j < intervalsUsed.length; j++) {
      if (intervalsUsed[j] <= times[i][0]) {
        intervalsUsed[j] = times[i][1]
        indexOfChairUsed = j
        break; // to stop reassigning of chairs
      }
    }

    if (indexOfChairUsed === -1) {
      intervalsUsed.push(times[i][1])
      indexOfChairUsed = intervalsUsed.length - 1
    }

    if (times[i].join('-') === itemToMatch) return indexOfChairUsed
  }
};


var smallestChair = function (times, targetFriend) {
  const n = times.length;

  times = times.map((time, index) => [...time, index]);

  times.sort((a, b) => a[0] - b[0]);

  let freeChairs = [];

  let occupiedChairs = [];

  for (let i = 0; i < n; i++) {
    freeChairs.push(i);
  }

  for (let i = 0; i < n; i++) {
    let [arrive, leave, originalIndex] = times[i];

    while (occupiedChairs.length && occupiedChairs[0][0] <= arrive) {
      let [_, chair] = occupiedChairs.shift();
      freeChairs.push(chair);
      freeChairs.sort((a, b) => a - b);
    }

    let assignedChair = freeChairs.shift();

    occupiedChairs.push([leave, assignedChair]);
    occupiedChairs.sort((a, b) => a[0] - b[0]);

    if (originalIndex === targetFriend) {
      return assignedChair;
    }
  }
};
