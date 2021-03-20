const alphanumeric = (alphaPass) => {

    const patternOne = new RegExp(/[a-zA-Z]/);
    const patternSecond = new RegExp(/[0-9]/);
    const patternThird = new RegExp(/[@_!#$%^&*()<>?/|}{~:^]/);
    if (
        patternOne.test(alphaPass) &&
        patternSecond.test(alphaPass) &&
        !patternThird.test(alphaPass)
    ) {
        return "Password is AlphaNumeric";
    } else {
        return "Password is not Alphanumeric";
    }
}
console.log(alphanumeric("Joy@123"))