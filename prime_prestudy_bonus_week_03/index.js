function functionA(a) {
    return a * a;
}
function functionB(a) {
    return a + a;
}
function functionC(a) {
    return a / a;
}

console.log(functionA(functionB(functionC(10))));