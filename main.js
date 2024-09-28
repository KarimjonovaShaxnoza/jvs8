let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina']

let arr_1 = [] 
let arr_2 = []

for (let i = 0; i < letterSearch.length; i++) {
    if (letterSearch[i].toLowerCase().includes('n')) {
        arr_1.push(letterSearch[i])
    } else {
        arr_2.push(letterSearch[i])
    }
}

console.log(arr_1, "n qatnashgan so'zlar")
console.log(arr_2, "n qatnashmagan so'zlar")