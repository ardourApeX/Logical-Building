const greaterThan7 = (string) => {
    let count = 0;
    [...string].forEach(() => count++);
    return count > 7;
}
greaterThan7("Joy Gupta")