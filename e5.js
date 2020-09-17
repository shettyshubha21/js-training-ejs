function power(x, n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return x;
    }
    if (n == 2) {
        return x * x;
    }
    if (n % 2 == 0) {
        return power(power(x, n / 2), 2);
    }
    else {
        return x * (power(x, n - 1));
    }
}
console.log(power(3, 3));