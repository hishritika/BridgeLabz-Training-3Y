
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        debugger;

        if (transaction === null) {
            throw new Error("Null transaction");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("Missing amount or id");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        valid.push(transaction);
        console.log("Valid transaction:", transaction.id);
    } catch (error) {
        invalid.push({
            transaction: transaction,
            reason: error.message
        });

        console.log("Invalid transaction:", error.message);
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful transactions:", valid.length);
console.log("Failed transactions:", invalid.length);
