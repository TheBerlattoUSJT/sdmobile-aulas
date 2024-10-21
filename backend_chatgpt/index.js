require('dotenv').config()
const express = require('express')
const { GoogleGenerativeAI } = require('@google/generative-ai')
const app = express()
//função middleware(fica no meio do caminho entre o disparo da requisição e a função alvo 
// e converte o texto para objeto JavaScript)
app.use(express.json())
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

app.post('/pergunte-ao-gemini', async (req, res) => {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash'
    })
    const { prompt } = req.body
    const result = await model.generateContent(prompt)
    res.json({completion: result.response.text()})
})

//POST /pergunte-ao-chatgpt () => {}
app.post('/pergunte-ao-chatgpt', async (req, res) => {
    const openai = new OpenAI(OPENAI_API_KEY)
    const prompt = req.body.prompt //prompt que vai ser enviado ao chatgpt
    const model = 'gpt-4o-mini' //modelo de gpt que utilizaremos
    const role = 'user'
    const max_tokens = 50 //maximo de tokens que podera utilizar com base no preço
    const completion = await openai.chat.completions.create({
        messages: [{role: role, content: prompt}],
        model: model,
        max_tokens: max_tokens
    })
    res.json({completion: completion.choices[0].message.content})
})

//GET /oi?nome=Ana
app.get('/oi', (req, res) => {
    const nome = req.query.nome;
    res.json({msg: `oi, ${nome}`})
})

app.listen(3000, () => {
    console.log('Subiu')
})