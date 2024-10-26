var timeTaken = function (arrival, state) {
  let exitWaitingQueue = [], entryWaitingQueue = [];
  let retval = new Array(arrival.length).fill(0);
  let entryIndex = 0, exitIndex = 0;
  let previousOperation = -1, previousTime = -2;
  let currentTime = 0;

  for (let i = 0; i < arrival.length; i++) {
    if (state[i] === 0) entryWaitingQueue.push([arrival[i], i]);
    else exitWaitingQueue.push([arrival[i], i]);
  }

  while (entryIndex < entryWaitingQueue.length || exitIndex < exitWaitingQueue.length) {
    const nextEntryTime = entryIndex < entryWaitingQueue.length ? entryWaitingQueue[entryIndex][0] : Infinity;
    const nextExitTime = exitIndex < exitWaitingQueue.length ? exitWaitingQueue[exitIndex][0] : Infinity;
    const nextArrivalTime = Math.min(nextEntryTime, nextExitTime);

    if (currentTime < nextArrivalTime) currentTime = nextArrivalTime;

    if (previousTime + 1 !== currentTime) {
      // Priority to exit queue if available; otherwise, entry queue
      if (exitIndex < exitWaitingQueue.length && exitWaitingQueue[exitIndex][0] <= currentTime) {
        retval[exitWaitingQueue[exitIndex][1]] = currentTime++;
        previousOperation = 1;
        exitIndex++;
      } else {
        retval[entryWaitingQueue[entryIndex][1]] = currentTime++;
        previousOperation = 0;
        entryIndex++;
      }
    } else if (previousOperation === 0) {
      // Last operation was entry, so check entry queue first
      if (entryIndex < entryWaitingQueue.length && entryWaitingQueue[entryIndex][0] <= currentTime) {
        retval[entryWaitingQueue[entryIndex][1]] = currentTime++;
        previousOperation = 0;
        entryIndex++;
      } else {
        retval[exitWaitingQueue[exitIndex][1]] = currentTime++;
        previousOperation = 1;
        exitIndex++;
      }
    } else if (previousOperation === 1) {
      // Last operation was exit, so check exit queue first
      if (exitIndex < exitWaitingQueue.length && exitWaitingQueue[exitIndex][0] <= currentTime) {
        retval[exitWaitingQueue[exitIndex][1]] = currentTime++;
        previousOperation = 1;
        exitIndex++;
      } else {
        retval[entryWaitingQueue[entryIndex][1]] = currentTime++;
        previousOperation = 0;
        entryIndex++;
      }
    }

    previousTime = currentTime - 1;
  }

  return retval;
};

