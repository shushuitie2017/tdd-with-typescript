interface ProductPrice {
    getPrice(): number;
}

class Product{
    cost: number
    getCost() {
        return this.cost
    }
    getPrice() {
        return 123
    }
}

class ProductAdapter extends Product implements ProductPrice {
    getPrice() {
        return 1
    }
}