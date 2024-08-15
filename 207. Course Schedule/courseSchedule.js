function canFinish(numCourses, prerequisites) {
  // Step 1: Create an adjacency list and an in-degree array
  const graph = Array.from({ length: numCourses }, () => []);

  // Indegree indicates the count of prerequisites required
  const inDegree = new Array(numCourses).fill(0);
  
  // Step 2: Populate the adjacency list and the in-degree array
  for (let [course, prereq] of prerequisites) {
      graph[prereq].push(course);
      inDegree[course]++;
  }
  
  // Step 3: Initialize the queue with all nodes having an in-degree of 0
  // Complete all courses without prerequisites
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) {
          queue.push(i);
      }
  }
  
  // Step 4: Process nodes with BFS
  let processedCourses = 0;
  while (queue.length > 0) {
      const course = queue.shift();
      processedCourses++;
      
      // Reduce the in-degree of each neighbor
      for (let neighbor of graph[course]) {
          inDegree[neighbor]--;
          // If in-degree becomes 0, add to queue
          if (inDegree[neighbor] === 0) {
              queue.push(neighbor);
          }
      }
  }
  
  // Step 5: If we've processed all courses, return true; otherwise, false
  return processedCourses === numCourses;
}