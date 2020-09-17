function countChar(s, char) {
    let count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] == char) {
            count = count + 1;
        }
    }
    return count;
}

function countBs(s) {
    return countChar(s, "B");
}
console.log(countChar('kakkerlak', "k"));
console.log(countBs("bBBc"));
