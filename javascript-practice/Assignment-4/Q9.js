
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        let total = 0;

        for (let item of this.items) {
            total = total + (item.price * item.quantity);
        }

        return total;
    }

    applyCoupon(coupon) {
        let discount = 0;

        let couponPattern = /^(SAVE20|DISC10)$/;

        if (couponPattern.test(coupon)) {

            if (coupon === "SAVE20") {
                discount = 20;
            } 
            else if (coupon === "DISC10") {
                discount = 10;
            }

            let total = this.getTotal();
            let finalTotal = total - (total * discount / 100);

            console.log("Coupon Applied:", coupon);
            console.log("Discount:", discount + "%");
            console.log("Final Total:", finalTotal);

        } 
        else {
            console.log("Invalid Coupon Code!");
            console.log("Total Amount:", this.getTotal());
        }
    }
}

let cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Shopping Cart Items:");
console.log(cart.items);

console.log("Total Amount:", cart.getTotal());

cart.applyCoupon("SAVE20");
