//type narrowing
function getid(id) {
    if (typeof id === "number") {
        return 0;
    }
    else {
        return "fuck you";
    }
}
function isAdmin(account) {
    //logic??
    if (("admin" in account) == true) {
        console.log("admin");
        // return account.Admin
    }
    else {
        const promoted = { ...account, Admin: true };
        console.log("he is promoted");
    }
}
function petIdent(pet) {
    pet.swim !== undefined;
}
export {};
//# sourceMappingURL=typeNarrowing.js.map