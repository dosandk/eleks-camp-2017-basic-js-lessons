function doubleNum(num) {
    let str = num.toString();
    let piece = str.slice(str.length / 2);
    return piece + piece === str ? num : num * 2;
}