var numberToWords = function (num) {
  if (num === 0) return 'Zero'
  let numberMap = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million",
    1000000000: "Billion"
  }

  const returnNumberToWord = (number) => {
    count = 0
    let strArr = []

    if (number[0] >= 1) strArr.push(numberMap[Number(number[0])], numberMap[100])

    if (number[1] >= 2) {
      strArr.push(numberMap[Number(number[1]) * 10])
      if (Number(number[2])) strArr.push(numberMap[Number(number[2])])
    } else if (Number(number[1]) || Number(number[2])) {
      strArr.push(numberMap[Number(number[1] + number[2])])
    }

    return strArr
  }

  let retval = [], counter = 0

  while (num > 0) {
    let thousandCutNum = '' + num % 1000
    if (thousandCutNum == 0) {
      num = Math.floor(num / 1000)
      counter++
      continue
    }
    while (thousandCutNum.length < 3) {
      thousandCutNum = '0' + thousandCutNum
    }
    let tempNumber = returnNumberToWord(thousandCutNum)

    if (counter === 1) {
      tempNumber.push('Thousand')
    } else if (counter === 2) {
      tempNumber.push('Million')
    } else if (counter === 3) {
      tempNumber.push('Billion')
    }

    retval.unshift(...tempNumber)
    counter++
    num = Math.floor(num / 1000)
  }

  return retval.join(' ')
};