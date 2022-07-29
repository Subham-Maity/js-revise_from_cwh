### 1. Create a variable of type string and try to add a number to it 

```Js
let a = "Subham"
let b = 6
console.log(a + b)

//output : Subham6

```

### 2. Use type of operator to find the data type of the string in last question 

```Js
let a = "Subham"
let b = 6
console.log(typeof (a + b))

//output : string   

```

### 3. Create a const object in JavaScript can you change it to holder number later on?

```Js
let cost = {
    name: "Subham",
    age: 22,
    city: "Kolkata"
}
cost = 45
console.log(cost)

//output : 45



//But We can't change it to const.

const a1 = {
    name: "Subham",
    section: 1,
    isPrincipal: false
}
a1 = 45
a1 = {}
//output :  error

```
### 4.Try to add a new key to the const object in problem 3 were you able to do it.
    
```Js
const a2 = {
    name: "Subham",
    section: 1,
    isPrincipal: false
}
a2['friend'] = "Shubham"
a2['name'] = "Lovish"
console.log(a2)

//output : {name: "Lovish", section: 1, isPrincipal: false, friend: "Shubham"}

```
### 5. Write Js program to create a word meaning Dictionary of five words 

```Js
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
}

console.log(dict['yakka'])
console.log(dict.yakka) //same
//output : work, especially hard work.
//output : work, especially hard work.

```



