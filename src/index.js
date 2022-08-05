module.exports = function check(str, bracketsConfig) {
    let tempStack = [];
    for (let i of bracketsConfig) {
        for (let n = 0; n < str.length; n++) {
            if (str[n] === i[0]) {
                tempStack.push(str[n]);
            } else if (str[n] === i[1]) {
                tempStack.pop();
            }
        }
    }
    return tempStack.length === 0 ? true : false;
};