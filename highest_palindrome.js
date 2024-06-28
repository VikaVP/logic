// function check palindrome
const isPalindrome = (words) => {
    // check if reverse word is same with normal words, if yes it's palindrome
    return words.split("").reverse().join("") == words;
}

const highestPalindrome = (input, k) => {
    // set to number
    const num = +input
    // check if valid number
    if(!isNaN(num)){
        // check if input just 1
        if(input.length === 1 && k > 0){
            return num !== 9 ? '9' : input
        } else {
            // return input if no remaining k
            if(k === 0){
                return input
            }
            let newK = k
            let firstLetter;
            // check if first word not same and set to 9 if not 9
            +input[0] !== +input[input.length - 1] ? 
                +input[0] !== 9 ? ((firstLetter = '9'), newK -= 1) : (firstLetter = input[0]) : (firstLetter = input[0]);

            let lastLetter; 
            // check if last word not same and set to 9 if not 9
            +input[0] !== +input[input.length - 1] ? 
                +input[input.length - 1] !== 9 ? 
                ((lastLetter = '9'), newK -= 1) : (lastLetter = input[0]) : (lastLetter = input[0]);
            // checking if input is palindrome
            const check = isPalindrome(input)
            // logic if already palindrome
            if(check){
                // logic if k still has remaining value
                if(k >= 2){
                    // check first word and last word hasn't value 9, if not change to 9
                    if(input[0] !== '9' && input[input.length - 1] !== '9'){
                        firstLetter = '9'
                        lastLetter = '9'
                        newK -= 2
                    }
                } else {
                    // return -1 if invalid format
                    return -1
                }
            }
            // return value with recursion and slice word without first and last word
            return firstLetter + highestPalindrome(input.slice(1, input.length - 1), newK) + lastLetter
        }
    } else {
        return -1
    }
}

console.log(highestPalindrome('3943', 1));
console.log(highestPalindrome('932239', 2));