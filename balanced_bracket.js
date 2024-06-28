const balancedBracket = (strings) => {
    // checking valid characters just allowed [ , ] , { , } , ( , )
    if(/^[\[\]*\)\(\}\{ ]+$/g.test(strings)){
        // set open tag characters
        const openTag = ['(', '{', '[']
        let open = []
        // set default validation string
        let valid = 'YES'
        // mapping string input
        strings.split('').map(str => {
            // check if string is open tag and then push to open array
            openTag.includes(str) && (open.push(str))
            // logic for open length
            if(open.length > 0){
                // set last character
                let getLastStr;
                // check character closing tag
                switch(str) {
                    case ')':
                        // pop last element of open array
                        getLastStr = open.pop()
                        // set NO if last string not compatible with )
                        getLastStr !== '(' && (valid = 'NO')
                        break;
                    case '}':
                        // pop last element of open array
                        getLastStr = open.pop()
                        // set NO if last string not compatible with }
                        getLastStr !== '{' && (valid = 'NO')
                        break;
                   case ']':
                        // pop last element of open array
                        getLastStr = open.pop()
                        // set NO if last string not compatible with ]
                        getLastStr !== '[' && (valid = 'NO')
                        break;
                }
            }
        })
        return valid
    } else {
        return 'Invalid characters, character allowed just { } ( ) [ ]'
    }
    
}

console.log(balancedBracket('{ [ ( ) ] }'));
console.log(balancedBracket('{ [ ( ] ) }'));
console.log(balancedBracket('{ ( ( [ ] ) [ ] ) [ ] }'));
console.log(balancedBracket('[}}}]'));

// This complexity of the question is O(n) where iteration string of size n one time.
// We should iteration string input and checking if open and closing tag is compatible/balance
// So, my approached to solve this problem is using regex first to check if string/input just contains { , }, [, ], (, ) and using map method for faster built in method iterate the strings then push just open tag to new variable called open. So i use switch to check if closing tag which in iteration now is match with last open tag in variable open.