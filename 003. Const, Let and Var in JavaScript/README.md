## Var vs Let vs Const
### 1. var is globally scoped while let and const are block scoped.
```js
var b = "subham";
{
    var b = "this";
    console.log(b);
}
console.log(b);

    
Output :
this
this
______________________________________________________
If i change it to let 
______________________________________________________
let b = "subham";
{
  let b = "this";
   console.log(b);
}
console.log(b);
    
Output :
this
subham

    
```



### 2. var can be updated & redeclared within the same scope. But let and const can be updated & redeclared within the same block.
```js
var a = 45;
var a = "subham";
console.log(a);

Output : subham
______________________________________________________
If i change it to let
______________________________________________________

let a = "subham";
let a = 45;
console.log(a);

Output :
We can't redeclare a as let.

______________________________________________________
but you can update it.
______________________________________________________
let a = "subham";
a = 45;
console.log(a);

Output : 45
```


### 3. const can neither be updated nor redeclared.
```js
______________________________________________________
you can't' update it.
______________________________________________________
const b = "subham";
b = "this";
console.log(b);
Output: We can't update b as const.
______________________________________________________
you can't' redeclare it.
______________________________________________________
const b = "subham";
const b= "this";
console.log(b);
Output: We can't redeclared. b as const.
```

### 4. var variables are initialized with undefined. Let and const variables are initialized.
```js
var a;
console.log(a);
const b; //you can't do this.
console.log(b);

const c = "subham";//you have to do this.
console.log(c);
```

### 5. const variables must be initialized during declaration unlike let and var.
```js
// const variables must be initialized during declaration unlike let and var.
const a; //you have to do this.
console.log(a);

```


