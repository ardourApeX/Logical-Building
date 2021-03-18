let date1 = "02/05/2021";
let date2 = "24/01/2021";
[d1, m1, y1] = date1.split("/");
[d2, m2, y2] = date2.split("/");
if (y1 === y2) {
    if (m1 === m2) {
        if (d1 === d2) {
            console.log("Both dates are same");
        }
        else if (d1 < d2) {
            console.log(date1);
        }
        else {
            console.log(date2);
        }
    }
    else if (m1 < m2) {
        console.log(date1);
    }
    else {
        console.log(date2)
    }
}
else if (y1 < y2) {
    console.log(date1);
}
else {
    console.log(date2);
}