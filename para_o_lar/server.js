const app = require('./src/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server em funcionamento na porta ${PORT}`))