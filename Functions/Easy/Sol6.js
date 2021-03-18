const angles = [30, 60, 90]
const any2Same = (angles) => {
    if (angles[0] === angles[1] || angles[1] === angles[2] || angles[0] === angles[2]) {
        return true
    }
    return false
}
const all3Same = (angles) => angles[0] === angles[1] === angles[2]
const isTriangle = (angles) => angles[0] + angles[1] + angles[2] === 180

switch (angles) {
    case !isTriangle(angles):
        console.log("Not a Triangle");
        break;

    case any2Same(angles):
        console.log("Isoceles")
        break;

    case all3Same(angles):
        console.log("Equilateral");
        break;

    default:
        console.log("Scalen Triangle")
        break;
}