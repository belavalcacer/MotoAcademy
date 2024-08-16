const express = require('express')

const app = express();
app.use(express.json())

const checkLogin = (req, res, next) => {
    console.log("Olá mundo")
    const logado = req.headers.authorization == "Bearer tokenValido"
    if(logado) {
        next()
        }else {
            res.status(401).json({message: "Você precisa estar logado para acessar essa"})
    }
}

let users = [ 
    { id: 1, name: 'Sandra', email: 'eu@gmail.com', senha: "12345"},
    { id: 2, name: 'John', email: 'vc@gmail.com', senha: "12345"},
    
]
app.get("/usuarios", checkLogin,(req, res)=>{
    console.log("Tchau mundo")
    res.status(200).json(users);
})
app.post("/usuarios", checkLogin,(req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const id = users.length + 1;
    const newUser = {id, name}
    users.push(newUser);
    res.status(201).json(newUser);
})

//https://localhost:3001/usuarios/1



app.put("/usuarios/:id", checkLogin, (req, res) => {
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

app.delete("/usuarios/:id", checkLogin,(req, res) => {
    const id = parseInt(req.params.id)
    users = users.filter(user => user.id !== id);
    res.sendStatus(204)
})

app.post('/login', checkLogin, (req, res) => {
    const {name, email, senha} = req.body;
    const user = users.find(user => user.email == email && user.senha == senha);
    if(user){
        res.json({message:"Login bem sucedido", token: "tokenValido"})
         }
        else{
            res.json({message: "Credenciais invalidas"})
        }

})

app.get('/', checkLogin ,(req,res) => {
    res.send({message:"Olá mundo!"})
})

app.listen(3001)

