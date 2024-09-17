// //1 + 2 + ... + n-1 + n
// function calculoRapidinho(n){
//     //use um if/else para decidir se você devolve
//     //uma promise fullfilled ou uma promise rejected
//     //se for rejected, produza a mensagem de erro
//     //"somente valores positivos,por favor"
//     if (n > 0) {
//         return Promise.resolve((n / 2) * (n + 1))
//     } else {
//         return Promise.reject('Somente valores positivos, por favor')
//     }
// }

// calculoRapidinho(10)
// .then((res) => {
//     console.log(`Resultado: ${res}`)
// })
// .catch((err) => {
//     console.log(`Erro: ${err}`)
// })

// calculoRapidinho(-5)
// .then((res) => {
//     console.log(`Resultado: ${res}`)
// })
// .catch((err) => {
//     console.log(`Erro: ${err}`)
// })

// function calculoDemorado(n){
//     let p = new Promise(function(resolve, reject){
//     let resultado = 0
//     for(let i = 1; i <= n; i++) resultado += i
//     resolve(resultado)
//     })
//     return p
// }

// const minhaPrimeiraPromise = calculoDemorado(10)
// //then/catch -> promisses!
// minhaPrimeiraPromise.then((abc) => {
//     console.log(`Resultado: ${abc}`)
// })