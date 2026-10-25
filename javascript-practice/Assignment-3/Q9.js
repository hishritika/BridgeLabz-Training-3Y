const rawData = [
    '{"user":"Alex","age":"25"}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        debugger;

        const data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        data.age = Number(data.age);

        if (Number.isNaN(data.age)) {
            throw new Error("Age must be a number");
        }

        cleanData.push(data);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Error on line ${i + 1}: ${error.message}`);
    }
}

const under18 = cleanData.filter(function (user) {
    return user.age < 18;
});

console.log("Clean data:", cleanData);
console.log("Under-18 users:", under18);
console.log("Total valid entries:", cleanData.length);
console.log("Total errors:", errors.length);
