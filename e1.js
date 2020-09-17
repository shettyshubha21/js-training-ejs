function rightJustify(s) {
    let space = "";
    let total_length = 70;
    for (let index = 1; index < total_length - s.length; index++) {
        space += " ";
    }
    return (space + s);
}
console.log(rightJustify('Monty'));

