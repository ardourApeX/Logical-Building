const message = "5565534276455423"
const encode = (msg) => "#".repeat(msg.length - 4) + msg.slice(msg.length - 4, msg.length)
console.log(encode(message))