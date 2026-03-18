class Product {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number, discount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount;
    }
}

class Order {
    orderId: string;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(orderId: string, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }

    addItem(item: Product) {
        this.items.push(item);
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const itemTotal = item.price * item.amount * (1 - item.discount / 100);
            total += itemTotal;
        }
        this.totalAmount = total;
    }
}
