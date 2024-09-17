// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     //funções callback
//     const exibirConteudo = function(erro, conteudo){
//         if (!erro) {
//             console.log(conteudo.toString())
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = function(erro){
//                 if(erro)
//                     console.log(`Deu erro: ${erro}`)
//                 else
//                     console.log('Ok, escreveu o dobro')
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//         else
//             console.log(`Erro: ${erro}`)        
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

//execução sincrona e assincrona

//GET /livros
// app.get('/livros', (req, res) => {
//     const livros = //busca na rede(demorada...)
//     res.json(livros)
// })

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos); //NO-OP
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// setTimeout(() => {
//     const d = demorada()
//     console.log(`Demorada terminou: ${d}`)
// }, 500)
// const e = 2 + a + b
// console.log(e)

// const a = 2 + 7
// const b = 5
// console.log(a+b)
// console.log('Eu primeiro')
// console.log('Agora eu')
// console.log('Sempre vou ser a última...')


//JSON: Javascript Object Notation, Objeto literal 

//uma calculadora é capaz de fazer soma e subtração
//a soma, ela faz com uma função regular
//a subtração, ela faz com uma arrow function com return implícito

// const calculadora = {
//     somar: function(a, b){
//         return a + b
//     },
//     subtrair: (a, b) => a - b
// }

// console.log(calculadora.somar(2, 2))
// console.log(calculadora['subtrair'](3, 2))



//Uma concessionaria tem CNPJ, endereco(logradouro, numero e bairro) e um estoque de veículos. No momento
//há 2 veículos, mas pode existir uma qtde arbitrária a qualquer momento, inclusive, eventualmente, 0 veículos

// const concessionaria = {
//     cnpj: '123456789/0001-55',
//     endereco: {
//         logradouro: 'Rua J',
//         numero: 100,
//         bairro: 'H'
//     },
//     veiculos: [
//         {
//             marca: 'Chevrolet',
//             modelo: 'Equinox',
//             ano: 2024,
//             preco: 216000
//         },
//         {
//             marca: 'BMW',
//             modelo: 'X6',
//             ano: 2024,
//             preco: 813000
//         }
//     ]
// }
// console.log(concessionaria.veiculos[0].ano)
// //usar a função foreach para exibir cada detalhe de cada veículo
// concessionaria.veiculos.forEach(veiculo => {
//     console.log(`Modelo: ${veiculo.modelo}, Marca: ${veiculo.marca}, Ano: ${veiculo.ano}`)
// })
// //adicionar um preco a cada veiculo e exibir o valor medio
// const total = concessionaria.veiculos.reduce((ac, v) => ac.preco + v.preco)
// console.log(total === 0 ? 'Estoque vazio': `Valor Médio: ${total / concessionaria.veiculos.length}`)

//pq usar o operador [] para acesso a membro?
//Seu nome (forms)
//Seu RA (forms)
// const aluno = {
//     'Seu nome': 'Eduardo',
//     'Seu RA': 821220735
// }

// console.log(aluno['Seu nome'])
// console.log(aluno['Seu RA'])


//pessoa que se chama Maria, tem 21 anos e mora na Rua B, numero 50, Vila J
// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 50,
//         bairro: 'Vila J'
//     }
// }
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['bairro'])


//uma pessoa que se chama João e tem 17 anos
// const pessoa = {
//     nome: 'João',
//     idade: 17
// }

//console.log(pessoa.nome)
//console.log(pessoa['idade'])


//closures
//higher order function
//let a = () => {}

// function f(funcao){
//     funcao()
// }

// function g(){
//     console.log('g')
//     function outraFuncao(){
//         console.log('Fui produzida por g')
//     }
//     return outraFuncao
// }
// f(g)
// g()()

// f(() => console.log('oi'))

// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()

//funções que operam sobre vetores
// const numeros = [1, 2, 3, 4]

// const resultado = numeros.reduce((ac, v) => ac + v)
// console.log(resultado)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Cristina']
// //É verdade que pelo menos um elemento começa com A?
// const resultado = nomes.some(nome => nome[0] === "A")
// console.log(resultado)

// //É verdade que todos os nomes começam com A?
// const resultado = nomes.every(n => n[0] === "A")
// console.log(resultado)

// const iniciais = nomes.map(nome => nome[0])
// console.log(iniciais)

// const apenasComA = nomes.filter((x) => x.startsWith('A'))
// console.log(apenasComA)

//funções regulares e arrow functions

// const dobro = a => 2*a
// console.log(dobro(1))

// const teste = a => {console.log(a)}
// teste(2)

//() => {}

// const triplo = function (n=5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(7))

// const dobro = function (n){
//     return 2 * n
// }
// console.log(dobro(3))

// function somar(a, b){
//     return a + b
// }
// const res = somar(2, 3)
// console.log(res)

// function hello(){
//     console.log('Hello functions')
// }
// hello()

// function hello(nome){
//     console.log(`Hello, ${nome}`)
// }
// hello('Ana')

//bloquinho de codigo c 4 partes
//tipo de retorno, nome, params e corpo

//declaração
//v1 = []
//v1[0] = 5
//console.log(v1)
//console.log(v1.length)
//v1[10] = 7
//console.log(v1)
//console.log(v1.length)
//for (let i = 0; i < v1.length; i++) {
//    console.log(v1[i]);
//    
//}

//console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === '1')
// console.log('1' === '1')
// console.log(1 == [1])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)

//coerção explícita
// const n1 = 2
// const n2 = '3'
// const n3 = 2 + Number(n2)
// console.log(n3)

//coerção implícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)

//declaração de variáveis
//javascript é uma linguagem de multiplas passagens, primeira passagem identifica declaração e ordem de execução
//Palavras reservadas para a construção de variáveis: let, const, var

// let idade = 18
// console.log("Oi, " + nome)

//usando var há o içamento = hoist (mesmo a variável declarada dentro do if, é como se fosse declarada fora do if)
// if (idade >= 18) {
//     let nome = "Ana"
//     console.log("Sim, " + nome + ", você pode dirigir!")
// }
// console.log("Tchau!, " + nome)

// var linguagem = "JS"
// var linguagem = "Java"

// let nome = "Ana"
// nome = "Ana Paula"

// const nome = "Ana"
// nome = "Ana Paula"


//sistema de tipos estático, feito pelo compilador (em tempo de compilação).
// int a;
// a = 2;
// a = "abc";
// a.falar();
// List < List < HashMap <String, Pessego> > > a; 

//sistema de tipos dinâmico
// a = 2
// a = "abc"
// a.falar()