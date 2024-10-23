
var mostBooked = function (n, meetings) {
  let availableRooms = new MinPriorityQueue({ priority: (x) => x }); // Tracks available rooms (room number)
  let ongoingMeetings = []

  const addToMeeting = (meeting) => {
    ongoingMeetings.push(meeting)
    sortMeetings()
  }

  const sortMeetings = () => {
    ongoingMeetings = ongoingMeetings.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0]
      return a[1] - b[1]
    })
  }

  let meetingCountPerRoom = new Array(n).fill(0); // Tracks the number of meetings per room

  // Initialize available rooms (0-indexed)
  for (let i = 0; i < n; i++) {
    availableRooms.enqueue(i);
  }

  // Sort meetings by start time (and by end time if start times are the same)
  meetings.sort((a, b) => a[0] - b[0]);

  for (let [start, end] of meetings) {
    while (ongoingMeetings.length !== 0 && ongoingMeetings[0][0] <= start) {
      let [_, roomNumber] = ongoingMeetings.shift();
      availableRooms.enqueue(roomNumber); // Make the room available again
    }

    if (!availableRooms.isEmpty()) {
      // If there's an available room, assign it
      let roomNumber = availableRooms.dequeue().element;
      addToMeeting([end, roomNumber]);
      meetingCountPerRoom[roomNumber]++; // Increment the count of meetings handled by this room
    } else {
      let [earliestEndTime, roomNumber] = ongoingMeetings.shift();
      let duration = end - start;
      addToMeeting([earliestEndTime + duration, roomNumber]);
      meetingCountPerRoom[roomNumber]++;
    }
  }

  let maxMeetings = 0;
  let mostBookedRoom = 0;
  for (let i = 0; i < n; i++) {
    if (meetingCountPerRoom[i] > maxMeetings) {
      maxMeetings = meetingCountPerRoom[i];
      mostBookedRoom = i;
    }
  }

  return mostBookedRoom;
};
