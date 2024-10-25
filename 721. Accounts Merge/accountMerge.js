/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  // email -> [name, indegree]
  const accountToNameMap = new Map()
  const adjacency = new Map()

  const coverageQueue = [], coveredList = new Set()

  const retval = []

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      if (!accountToNameMap.has(accounts[i][j])) accountToNameMap.set(accounts[i][j], accounts[i][0])

      for (k = j + 1; k < accounts[i].length; k++) {
        if (!adjacency.has(accounts[i][j])) adjacency.set(accounts[i][j], [])
        if (!adjacency.has(accounts[i][k])) adjacency.set(accounts[i][k], [])
        adjacency.get(accounts[i][j]).push(accounts[i][k])
        adjacency.get(accounts[i][k]).push(accounts[i][j])
      }

      coverageQueue.push(accounts[i][j])
    }
  }

  while (coverageQueue.length > 0) {
    const email = coverageQueue.shift()
    if (coveredList.has(email)) continue
    coveredList.add(email)

    let coveringQueue = [email], emailList = []
    while (coveringQueue.length > 0) {
      const covitem = coveringQueue.shift()
      emailList.push(covitem)

      for (item of adjacency.get(covitem) || []) {
        if (!coveredList.has(item)) {
          coveredList.add(item)
          coveringQueue.push(item)
        }
      }
    }

    retval.push([accountToNameMap.get(email), ...emailList.sort()])

  }

  return retval
};