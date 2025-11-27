//abstract classes 
class payment {
    constructor(upiId, amount, isPaid) { }
}
class premiumuser extends payment {
    upiId;
    amount;
    isPaid;
    constructor(upiId, amount, isPaid) {
        super(upiId, amount, isPaid);
        this.upiId = upiId;
        this.amount = amount;
        this.isPaid = isPaid;
    }
    premiumCust() {
        if (this.isPaid === true) {
            console.log("this is a premium user and he is eligible to acess the premium servies");
        }
    }
}
export {};
//# sourceMappingURL=abstract.js.map