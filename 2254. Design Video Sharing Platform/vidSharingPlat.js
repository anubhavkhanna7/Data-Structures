var VideoSharingPlatform = function() {
  this.videoList = new Map()
  this.deletedIndices = []
  this.lastId = -1
};

/** 
* @param {string} video
* @return {number}
*/
VideoSharingPlatform.prototype.upload = function(video) {
  let videoId
  if (this.deletedIndices.length > 0) {
      videoId = this.deletedIndices.sort((a,b) => b-a).pop()
  } else {
      videoId = ++this.lastId
  }

  // [videoData, like, dislike, views]
  this.videoList.set(videoId, [video, 0, 0, 0])

  return videoId
};

/** 
* @param {number} videoId
* @return {void}
*/
VideoSharingPlatform.prototype.remove = function(videoId) {
  if (this.videoList.has(videoId)) {
      this.videoList.delete(videoId)
      this.deletedIndices.push(videoId)
  }
};

/** 
* @param {number} videoId 
* @param {number} startMinute 
* @param {number} endMinute
* @return {string}
*/
VideoSharingPlatform.prototype.watch = function(videoId, startMinute, endMinute) {
  if (this.videoList.has(videoId)) {
      this.videoList.get(videoId)[3]++
      let end = Math.min(endMinute, this.videoList.get(videoId)[0].length-1)

      return this.videoList.get(videoId)[0].slice(startMinute, end+1)
  }

  return '-1'
};

/** 
* @param {number} videoId
* @return {void}
*/
VideoSharingPlatform.prototype.like = function(videoId) {
  if (this.videoList.has(videoId)) {
      this.videoList.get(videoId)[1]++
  }
};

/** 
* @param {number} videoId
* @return {void}
*/
VideoSharingPlatform.prototype.dislike = function(videoId) {
  if (this.videoList.has(videoId)) {
      this.videoList.get(videoId)[2]++
  }
};

/** 
* @param {number} videoId
* @return {number[]}
*/
VideoSharingPlatform.prototype.getLikesAndDislikes = function(videoId) {
  if (this.videoList.has(videoId)) {
      return [this.videoList.get(videoId)[1], this.videoList.get(videoId)[2]]
  }

  return [-1]
};

/** 
* @param {number} videoId
* @return {number}
*/
VideoSharingPlatform.prototype.getViews = function(videoId) {
  if (this.videoList.has(videoId)) {
      return this.videoList.get(videoId)[3]
  }

  return -1
};

/** 
* Your VideoSharingPlatform object will be instantiated and called as such:
* var obj = new VideoSharingPlatform()
* var param_1 = obj.upload(video)
* obj.remove(videoId)
* var param_3 = obj.watch(videoId,startMinute,endMinute)
* obj.like(videoId)
* obj.dislike(videoId)
* var param_6 = obj.getLikesAndDislikes(videoId)
* var param_7 = obj.getViews(videoId)
*/