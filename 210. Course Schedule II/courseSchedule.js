var findOrder = function(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  let inDegree = new Array(numCourses).fill(0)
  
  // add the order here 
  let orderedSchedule = [], queue = []

  for (let [course, requirement] of prerequisites) {
      graph[requirement].push(course)

      // increase depency count for the course
      inDegree[course] += 1
  }

  for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) {
          queue.push(i);
      }
  }

  while (queue.length > 0) {
      const course = queue.shift();
      orderedSchedule.push(course)
      
      // Reduce the in-degree of each neighbor
      for (let neighbor of graph[course]) {
          inDegree[neighbor]--;
          // If in-degree becomes 0, add to queue
          if (inDegree[neighbor] === 0) {
              queue.push(neighbor);
          }
      }
  }

  // if all courses completed, return the ordered list
  // else return empty array
  return orderedSchedule.length === numCourses ? orderedSchedule : []
};