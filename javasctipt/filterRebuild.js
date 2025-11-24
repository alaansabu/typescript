Array.prototype.myfilter =  function(cb){

const array = []
for (let i = 0; i < this.length; i++) {

    if(cb(this[i])){
        // const newVal = (this[i])
        // array[i] = newVal;

        array.push(this[i])
    }


}
    return array

}

const users = [
  { id: 1, name: "Alan", age: 22, city: "Mumbai", isActive: true, score: 85 },
  { id: 2, name: "Sara", age: 19, city: "Delhi", isActive: false, score: 72 },
  { id: 3, name: "Ravi", age: 26, city: "Bangalore", isActive: true, score: 91 },
  { id: 4, name: "Meera", age: 30, city: "Hyderabad", isActive: false, score: 64 },
  { id: 5, name: "John", age: 18, city: "Chennai", isActive: true, score: 77 },
  { id: 6, name: "Priya", age: 25, city: "Kolkata", isActive: true, score: 93 },
  { id: 7, name: "Arjun", age: 28, city: "Pune", isActive: false, score: 58 },
  { id: 8, name: "Zara", age: 21, city: "Mumbai", isActive: true, score: 89 },
  { id: 9, name: "Kabir", age: 24, city: "Delhi", isActive: false, score: 70 },
  { id: 10, name: "Aisha", age: 23, city: "Bangalore", isActive: true, score: 95 },
  { id: 11, name: "Rohan", age: 29, city: "Pune", isActive: true, score: 82 },
  { id: 12, name: "Sneha", age: 20, city: "Kolkata", isActive: false, score: 68 },
  { id: 13, name: "Vikram", age: 27, city: "Chennai", isActive: true, score: 88 },
  { id: 14, name: "Tina", age: 22, city: "Hyderabad", isActive: false, score: 73 },
  { id: 15, name: "Dev", age: 31, city: "Mumbai", isActive: true, score: 90 }
];

users.myfilter(val=>{
    
    if(val.city == "Mumbai")
        {
            
            return (console.log(val.name))
        }

})