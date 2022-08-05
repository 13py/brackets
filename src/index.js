module.exports = function check(str, bracketsConfig) {
    let tempStack = [];
    for (let n = 0; n < str.length; n++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str.length == 2 && str[0] == str[1]) {
                return true;
            }
            // console.log(str[n], n, tempStack[tempStack.length - 1]);
            if (str[n] == "|" && tempStack[tempStack.length - 1] == "|") {
                tempStack.pop();
                break;
            }
            if (str[n] === bracketsConfig[i][0]) {
                tempStack.push(str[n]);
            } else if (
                bracketsConfig[i][1] === str[n] &&
                bracketsConfig[i][0] === tempStack[tempStack.length - 1]
            ) {
                tempStack.pop();
                break;
            }
        }
    }
    return tempStack.length === 0 ? true : false;
};

// (i[0] === tempStack[tempStack.length - 1]) == i[0]
// module.exports = function check(str, bracketsConfig) {
//   let tempStack = [];
//   for (let i of bracketsConfig) {
//     for (let n = 0; n < str.length; n++) {
//       if (str[n] === i[0]) {
//         tempStack.push(str[n]);
//       } else if (str[n] === i[1]) {
//         tempStack.pop();
//       }
//     }
//   }
//   return tempStack.length === 0 ? true : false;
// };