var leastInterval = function (tasks, n) {
  let frequencies = new Array(26).fill(0);
  for (let task of tasks) {
    frequencies[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  frequencies.sort((a, b) => b - a);

  let maxFreq = frequencies[0];

  let idleSlots = (maxFreq - 1) * n;

  for (let i = 1; i < frequencies.length; i++) {
    idleSlots -= Math.min(frequencies[i], maxFreq - 1);
  }

  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};