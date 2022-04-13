process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function findBitwiseOr(array) {
  var bitwiseOrValue;
  if(array.includes('0')) {
    bitwiseOrValue = 0;
  } else {
    bitwiseOrValue = parseInt(array[0]);
    for (var i = 0;i< array.length ; i++) {
      bitwiseOrValue = bitwiseOrValue || parseInt(array[i]);

      if (bitwiseOrValue > parseInt(array[i])) {
        bitwiseOrValue = parseInt(array[i]);
      }
    }
  }
  process.stdout.write(bitwiseOrValue + '\n');
}

function main(input) {
  var inputs = input.split('\n');
  var testCaseCount = parseInt(inputs[0]);

  for (var i = 1; (i< inputs.length && testCaseCount > 0); i+= 2) {
    var array = inputs[i+1];
    findBitwiseOr(array.split(' '));
  }
}


