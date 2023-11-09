/*
Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.
*/

/* 

1. Input is a string
2. Output is also a string
3. If substring doesnt exist, then return null

Create a function that accepts string parameter and a set of characters to check against the string sequence

Parameter 1 represents the original string sequence
Parameter 2 represents the search term of characters from which a substring will be returned

In order to perform the search, iterate over the chracters of the string to compare the characters to the original string sequence


*/

const createSubstring = (ogString, charSequence) => {
    // Solution here...
    // Assuming the order of characters must be the same
    // 1. Take the first character in the character string and slice the string at that character
    // 2. Take the last character in the character string and slice the string at that character
    // 3. Remove the resultant sequence from the orginal string

    const arrOgString = ogString.split('');
    const arrCharSequence = charSequence.split('');
    let regexPattern = /ws[1-9]/;
    // console.log('arrCharSequence', arrCharSequence);
    const newArr = arrOgString.filter((char, index) => {
        for (let i = 0; i < arrOgString.length; i++) {
            console.log(char[i]);
            if (arrCharSequence[i] === char) {
                return char;
            }
        }
    });

    const joinedArray = newArr.join('');
    console.log('joinedArray', joinedArray);
    return regexPattern.test(joinedArray);
};

console.log(createSubstring('Valerie', 'Vi'));
