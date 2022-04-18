var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(num[2])
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
for(let c = 0; c < num.length; c++ ){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

for(let pos in num){
    console.log(num[pos])
}
let pos = num.indexOf(5)
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
