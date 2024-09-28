// TLE :(
var findItinerary = function(tickets) {
    let adjacencyGraph = new Map();
    let ticketCount = new Map();

    // Build the adjacency list and count tickets
    for (let [source, destination] of tickets) {
        if (!adjacencyGraph.has(source)) adjacencyGraph.set(source, []);
        adjacencyGraph.get(source).push(destination);

        // Create a unique key for each ticket and count occurrences
        let key = `${source}-${destination}`;
        ticketCount.set(key, (ticketCount.get(key) || 0) + 1);
    }

    // Sort destinations for each source lexicographically
    for (let [_, destinations] of adjacencyGraph) {
        destinations.sort();
    }

    let retval = [];
    let found = false;

    const createItinerary = (currentRoute) => {
        if (currentRoute.length === tickets.length + 1) {
            retval = [...currentRoute];
            found = true;
            return;
        }

        let startPoint = currentRoute[currentRoute.length - 1];
        let availableRoutes = adjacencyGraph.get(startPoint) || [];

        for (let selectedDestination of availableRoutes) {
            let genKey = `${startPoint}-${selectedDestination}`;
            
            // Check if there are tickets left for this route
            if (ticketCount.get(genKey) > 0) {
                // Use the ticket
                ticketCount.set(genKey, ticketCount.get(genKey) - 1);
                currentRoute.push(selectedDestination);

                // Recurse to build further
                createItinerary(currentRoute);

                // Stop recursion once a valid itinerary is found
                if (found) return;

                // Backtrack: restore the ticket count and the route
                ticketCount.set(genKey, ticketCount.get(genKey) + 1);
                currentRoute.pop();
            }
        }
    };

    // Start the itinerary from 'JFK'
    createItinerary(['JFK']);

    return retval;
};


// More Efficient

var findItinerary = function(tickets) {
  let adjacencyGraph = new Map();

  for (let [source, destination] of tickets) {
      if (!adjacencyGraph.has(source)) adjacencyGraph.set(source, []);
      adjacencyGraph.get(source).push(destination);
  }

  for (let [_, destinations] of adjacencyGraph) {
      destinations.sort().reverse();
  }

  let stack = ['JFK'];
  let mostEfiicientItenary = [];

  while (stack.length > 0) {
      let mostRecentLocation = stack[stack.length - 1];

      if (adjacencyGraph.has(mostRecentLocation) && adjacencyGraph.get(mostRecentLocation).length > 0) {
          // pick the one which is best lexicographically
          stack.push(adjacencyGraph.get(mostRecentLocation).pop());
      } else {
          // when all tickets used, add all of them to mostEficientItenary
          mostEfiicientItenary.push(stack.pop());
      }
  }

  return mostEfiicientItenary.reverse();
};
