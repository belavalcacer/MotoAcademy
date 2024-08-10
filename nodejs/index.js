const express = require('express')

const app = express();
app.use(express.json())

let users = [ 
    { id: 1, name: 'Sandra'},
    { id: 2, name: 'John'},
]
app.get("/usuarios", (req, res)=>{
    res.status(200).json(users);
})
app.post("/usuarios", (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const id = users.length + 1;
    const newUser = {id, name}
    users.push(newUser);
    res.status(201).json(newUser);
})

//https://localhost:3001/usuarios/1

app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const {name} = req.body

    const userIndex = users.findIndex(user => user.id == id);
    if(userIndex != -1) {
        users[userIndex].name = name;
        res.json(users[userIndex])
    } else{
        res.status(400).json({message: "Usuário não encontrado"})
    }
})

app.delete("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    users = users.filter(user => user.id !== id);
    res.sendStatus(204)
})

app.get('/', (req,res) => {
    res.send({message:"Olá mundo!"})
})

app.listen(3001)

