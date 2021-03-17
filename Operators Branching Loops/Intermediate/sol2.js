function pattern(n = 5) {

    for (var i = 1; i <= n; i++) {
        var printPattern = "";
        for (var j = 1; j <= i; j++) {
            printPattern += "* "
        }
        console.log(printPattern)

    }
}

pattern(5)