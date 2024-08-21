function sumOfFactorials(n) {
    let factorial = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        factorial *= i;  // Calculate i!
        sum += factorial;  // Add i! to sum
    }

    return sum;
}

// Test cases
console.log(sumOfFactorials(1));  // Output: 1
console.log(sumOfFactorials(2));  // Output: 3
console.log(sumOfFactorials(3));  // Output: 9
console.log(sumOfFactorials(4));  // Output: 33
console.log(sumOfFactorials(5));  // Output: 153
console.log(sumOfFactorials(10)); // Output: 4037913
