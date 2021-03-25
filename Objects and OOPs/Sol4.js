const cartItems = [
    {
        id: "101",
        name: "Oreo",
        count: 2,
        price: 30.0,
        discount: 0.18
    },
    {
        id: "102",
        name: "Red Bull",
        count: 1,
        price: 99.0,
        discount: 0.15
    },
    {
        id: "103",
        name: "Dairy Milk Silk",
        count: 3,
        price: 175.0,
        discount: 0.05
    },
    {
        id: "104",
        name: "Pulse Candy Pack",
        count: 1,
        price: 135.0,
        discount: 0.2
    }
];


const cartValue = (total, item) => total = total + item.price * item.count - item.discount;
const totalDiscount = (total, item) => total = total + item.discount;
function tax(value) {
    value = value * 18
    return value / 100
}

console.log("Total Iitems ", cartItems.length);
console.log("Cart Value ", cartItems.reduce(cartValue, 0))
console.log("Tota Discount Given ", cartItems.reduce(totalDiscount, 0))
console.log("Payable amount ", tax(cartItems.reduce(cartValue, 0)))