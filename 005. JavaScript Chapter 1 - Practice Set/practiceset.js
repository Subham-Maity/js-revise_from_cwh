// Chapter 1 - Q1
let a = "Subham"
let b = 6
console.log(a + b)

// Chapter 1 - Q2
console.log(typeof (a+b))

// Chapter 1 - Q3
let a1 = { //can't use const here
    name: "Subham",
    section: 1,
    isPrincipal: false
}
a1 = 45
a1 = {}

// Chapter 1 - Q4
const a2 = {
    name: "Subham",
    section: 1,
    isPrincipal: false
}
a2['friend'] = "Shubham"
a2['name'] = "Lovish"
console.log(a2)

// Chapter 1 - Q5
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
}

console.log(dict['yakka'])
console.log(dict.yakka)