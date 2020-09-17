function oddSum(n) {
    if (n <= 0) {
        return 0;
    }
    if (n % 2 != 0) {
        console.log(n);
        return (n + oddSum(n - 1));
    }
    else {
        return oddSum(n - 1);
    }
}
console.log(oddSum(10));
