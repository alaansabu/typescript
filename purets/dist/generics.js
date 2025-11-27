function identityone(val) {
    return val;
}
identityone({
    brand: "celio",
    type: 3
});
//generics in array
function findNamae(val) {
    const nameidx = 3;
    return val[nameidx];
}
const getMoreName = (val) => {
    const nameidx = 5;
    return val[nameidx];
};
//genric class
function anotherexample(valone, valtwo) {
    return {
        valone, valtwo
    };
}
anotherexample(2, { user_id: "Dev one", userName: "Alan Sabu" });
export {};
//# sourceMappingURL=generics.js.map