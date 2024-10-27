/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  let startTime = Infinity;
  const processor = new MinPriorityQueue({
    priority: (value) => value[1] * 1e5 + value[2]
  });
  const retval = [];

  for (let i = 0; i < tasks.length; i++) {
    startTime = Math.min(startTime, tasks[i][0]);
    tasks[i].push(i);
  }

  tasks.sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2]);

  while (tasks.length > 0 && tasks[tasks.length - 1][0] <= startTime) {
    processor.enqueue(tasks.pop());
  }

  while (processor.size() > 0) {
    const [_, processingTime, index] = processor.dequeue().element;
    retval.push(index);
    startTime += processingTime;

    if (processor.size() === 0 && tasks.length > 0 && tasks[tasks.length - 1][0] > startTime) {
      startTime = tasks[tasks.length - 1][0];
    }

    while (tasks.length > 0 && tasks[tasks.length - 1][0] <= startTime) {
      processor.enqueue(tasks.pop());
    }
  }

  return retval;
};
