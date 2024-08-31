const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes')
const fileRoutes = require('./routes/fileRoute')

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/files', fileRoutes)

app.listen(3001, () => {
    console.log("Servidor executando na porta 3001");
})