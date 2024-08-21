function binaryToDecimal(s) {
    let decimal = 0;
    
    for (let i = 0; i < s.length; i++) {
        decimal = decimal * 2 + parseInt(s[i], 10);
    }
    
    return decimal;
}

// Test cases
console.log(binaryToDecimal("1010"));       // Output: 10
console.log(binaryToDecimal("100000001"));  // Output: 257
console.log(binaryToDecimal("1100100"));    // Output: 100
