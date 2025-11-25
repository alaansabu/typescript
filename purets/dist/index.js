const name = "Alansabu";
console.log(name);
document.body.style.background = "red";
class User {
    name;
    email;
    _coursCount = 0;
    constructor(name, email) {
        this.name = name;
        this.email = email;
        email = "hey you have be successfully logged in";
    }
    get useremail() {
        return `mail is this ${this.email}`;
    }
    get courseCount() {
        console.log(this._coursCount);
        return this._coursCount;
    }
    set courseCount(val) {
        if (val < 1) {
            throw new Error("value should be given");
        }
        // val =4
        // console.log(this._coursCount);/
    }
}
const Alan = new User("A", "a@gmail,com");
Alan.courseCount - 4;
console.log(Alan.courseCount);
export {};
//# sourceMappingURL=index.js.map