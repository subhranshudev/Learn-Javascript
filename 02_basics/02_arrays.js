const marvel_Heros = ["thor", "Ironman", "spiderman"]
const dc_Heros = ["superman", "flash", "batman"]

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// const allHeros = marvel_Heros.concat(dc_Heros)
// console.log(allHeros);

const all_new_heros = [...marvel_Heros, ...dc_Heros]        //spread method
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("subhranshu"));
console.log(Array.from("subhranshu"));
console.log(Array.from({name: "subhranshu"}));   //intersting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));