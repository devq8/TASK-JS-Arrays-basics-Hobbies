let emptyArray = []
let hobbies = [
    'Swimming',
    'Reading',
    'Coding',
    'Fishing',
    'Traveling',
    'Shopping',
]

let numbers = [
    24,
    10,
    90,
    44,
    14,
]
console.log(numbers[1])
console.log(hobbies[hobbies.length-1])
hobbies.push('Fake hobby')
console.log(hobbies[hobbies.length-1])
hobbies.splice(-2)
console.log(hobbies.length)
for(let i=0; i<hobbies.length; i++){
    console.log(hobbies[i])
}
hobbies.splice(-hobbies.length)
console.log(hobbies)