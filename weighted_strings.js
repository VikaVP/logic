const timesBy = (num, times) => {
    return num * times
}
const weightedStrings = (str, arr) => {
    // set alphabets
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    // for alphabet and index
    const objStr = {}
    // variable for count index alphabet and its emergences
    const arrSum = []
    // looping string input
    for (let i = 0; i < str.length; i++) {
        // cek if string in object string 
        if(objStr[str[i]] === undefined){
            objStr[str[i]] = {
                // check index string
                index: alphabets.indexOf(str[i].toLowerCase()) + 1,
                count: 1
            }
        } else {
            // if not wen add count to 1
            objStr[str[i]].count += 1
        }
    }
    // looping value object string
    for (const i of Object.values(objStr)) {
        // check count is large than 1
        if(i.count > 1){
            // set array based on count string, example fill with 1
            const newArr = new Array(i.count).fill('1')
            newArr.map((num, index) => {
                // push str index * index array
                arrSum.push(timesBy(i.index, (index + 1)))
            })
        } else {
            // if not, just push index
            arrSum.push(i.index)
        }
    }
    return arr.map(num => {
        // check if number coutn array
        return arrSum.indexOf(num) !== -1 ? 'Yes' : 'No'
    })
}

console.log(weightedStrings('abbcccd', [1, 3, 9, 8]));
console.log(weightedStrings('abc', [1, 3, 9, 8]));
console.log(weightedStrings('ddb', [1, 3, 9, 8]));