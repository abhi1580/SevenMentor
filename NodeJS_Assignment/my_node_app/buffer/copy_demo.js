const b1=Buffer.alloc(11,"Intelligent")
const b2=Buffer.alloc(11)
const b3=

// const noOfBytesCopied=b1.copy(b2)
// const noOfBytesCopied=b1.copy(b2,5)
// const noOfBytesCopied=b1.copy(b2,5,3)
//6 is exclusive
const noOfBytesCopied=b1.copy(b2,5,3,6)


console.log("No of bytes copied",noOfBytesCopied)
console.log(b2.toString())