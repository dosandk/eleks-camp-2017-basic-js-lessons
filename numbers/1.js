function power(x, pow) {
    let res = x;
    for (let i=1; i<pow; i++) {
        res *=x;
    }
    return res;
}