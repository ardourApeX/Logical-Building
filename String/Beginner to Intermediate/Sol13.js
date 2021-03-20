const splitUP = (datenTime) => {
    return datenTime.slice(0, datenTime.indexOf(","))
}
console.log(splitUP("Wed April 15, 7pm"))