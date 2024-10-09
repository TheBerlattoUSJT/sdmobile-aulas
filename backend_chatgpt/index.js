require('dotenv').config()
const express = require('express')
const { OpenAI } = require('openai')
const app = express()
//função middleware(fica no meio do caminho entre o disparo da requisição e a função alvo 
// e converte o texto para objeto JavaScript)
app.use(express.json())
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
console.log(OPENAI_API_KEY)

//POST /pergunte-ao-chatgpt () => {}
app.post('/pergunte-ao-chatgpt', (req, res) => {
    const openai = new OpenAI(OPENAI_API_KEY)
    res.json({mensagem: 'Ok'})
})

//GET /oi?nome=Ana
app.get('/oi', (req, res) => {
    const nome = req.query.nome;
    res.json({msg: `oi, ${nome}`})
})

app.listen(3000, () => {
    console.log('Subiu')
})