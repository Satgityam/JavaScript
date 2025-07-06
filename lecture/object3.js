const cource = {
    courceName: "ai",
    courceId: 1010,
    courceDuration: "6 months",
    courceFee: 4000,
    courceInstructor: "kumkum"
}
const { courceFee: fee } = cource; // De-structruring the courceFee property
console.log(fee);