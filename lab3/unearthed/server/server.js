import express from 'express'
import dotenv from './config/dotenv.js'
import giftsrouter from './routes/gifts.js'
import cors from 'cors'

const app = express()

// // client/public
// app.use('/public', express.static('./public'))

// // client/public/scripts
// app.use('/scripts', express.static('./public/scripts'))
app.use(cors())

app.use('/gifts', giftsrouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})


const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
