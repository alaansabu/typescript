Array.prototype.Mymap = function(cb){

let arr = [];
for(let i =0;i<this.length;i++){

//mapping logic

    let newVal = cb(this[i])
    arr[i] = newVal
}
return arr;
}

array1 = [1,2,3,4,5,6]

console.log(array1.Mymap(val => val*4));
