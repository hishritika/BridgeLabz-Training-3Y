class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 10 / 100);
    }

    displayDetails() {
        console.log(
            "ID:", this.id,
            "| Name:", this.name,
            "| Price:", this.price,
            "| Category:", this.category
        );
    }
}

const product1 = new Product(1, "Laptop", 50000, "Electronics");
const product2 = new Product(2, "Mobile", 15000, "Electronics");
const product3 = new Product(3, "Mouse", 800, "Accessories");
const product4 = new Product(4, "Keyboard", 1200, "Accessories");

const products = [product1, product2, product3, product4];

for (let product of products) {
    product.applyDiscount();
}

console.log("All Products:");

for (let product of products) {
    product.displayDetails();
}

const expensiveProducts = products.filter(function (product) {
    return product.price > 1000;
});

console.log("Products with price greater than 1000:");

for (let product of expensiveProducts) {
    product.displayDetails();
}
