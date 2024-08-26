var getHint = function (secret, guess) {
  let map = new Map()
  let bulls = 0, cows = 0

  secret.split('').forEach((char, index) => {
    if (char === guess[index]) {
      bulls++
    } else {
      map.set(char, (map.get(char) || 0) + 1)
    }
  })

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] !== guess[i] && map.get(guess[i]) > 0) {
      cows++
      map.set(guess[i], map.get(guess[i]) - 1)
    }
  }

  return `${bulls}A${cows}B`
};