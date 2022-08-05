module.exports = function check(str, bracketsConfig) {
    let tempStack = [];
    for (let n = 0; n < str.length; n++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (
                bracketsConfig[i][1] === str[n] &&
                bracketsConfig[i][0] === tempStack[tempStack.length - 1]
            ) {
                tempStack.pop();
                break;
            } else if (
                bracketsConfig[i][0] === str[n] ||
                bracketsConfig[i][1] === str[n]
            ) {
                tempStack.push(str[n]);
                break;
            }
        }
    }
    return tempStack.length === 0;
};