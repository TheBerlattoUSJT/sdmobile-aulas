//Le as variaveis do dotenv e configura como variáveis de ambiente.
require('dotenv').config()
const axios = require('axios')

const {
    PROTOCOL, BASE_URL, APPID, Q, CNT, TRUE_LANGUAGE, UNITS
} = process.env

const vai = async () => {
    const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&cnt=${CNT}&lang=${TRUE_LANGUAGE}&units=${UNITS}`
    const resultado = await axios.get(url)
    console.log(resultado.data)
    for (let previsao of resultado.data.list){
      console.log(previsao.weather[0].description)
    }
  }
  vai()
  //complete essa função (async/await)
  //comece fazendo uma requisição com a axios
  //no tratamento, mostre a descrição de cada previsão que tenha a sensação térmica maior ou igual a 25. Mostre, também, a própria sensação térmica
  const ex = () => {
  
  }
  ex()

//Isso abaixo resulta em uma promisse
// axios.get(url)
// .then((res) => {
//     console.log(res.data)
//     console.log('==================================')
//     return res.data
// })
// .then(res => {
//     console.log(`CNT: ${res.cnt}`)
//     console.log('==================================')
//     return res
// })
// .then(res => {
//     //for of
//     for(let previsao of res.list){
//         console.log(`${new Date(Number(previsao.dt) * 1000).
//             toLocaleString()}`)
//     }
//     console.log('==================================')
//     return res
// })
// .then(res => {
//     console.log(`${new Date(Number(res.city.sunrise) * 1000).toLocaleString()}`)
//     console.log(`${new Date(Number(res.city.sunset) * 1000).toLocaleString()}`)
// })