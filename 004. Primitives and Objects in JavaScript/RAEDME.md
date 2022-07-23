## javascript has total of 7 primitive data types:
### nn bb ss u
```js
null
Number
Boolean
BigInt
String
Symbol
undefined
```

Example:
```js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Subham"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)

Output : null 345 true 567 3 Subham Symbol(I am a nice symbol) undefined
```

## Typeof is used to check the type of the variable.
```js
console.log(typeof a);//null
console.log(typeof b);//number
```
## Object is used to check the type of the variable.
```js
const item = {
    "Subhasish": true,
    "Shubham": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Shubham"])//false
```




