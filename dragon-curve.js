//this realisation works only for 90deg angle between lines of dragon curve


function countlines(n) {
    if (n === 1) {
        return 1
    } else {
        return countlines(n - 1) * 2 + 1;
    }

}

function dragonPath(n) {
    if (n === 1) return "1";

    else {
        var path = "";
        var str = dragonPath(n - 1);

        path = str + "1";

        for (var i = countlines(n - 1); i >= 1; i--) {
            if (str[i - 1] === "1") {
                path += "0"
            } else {
                path += "1";
            }
        }
        return path;
    }
}
dragonPath(4);


// n = 1: 1 
// n = 2: 1 1 0 
// n = 3: 110 1 100 
// n = 4: 1101100 1 1100100 
// n = 5: 1101100 1 1100100 1 1101100 0 1100100