const express = require('express')
const cors = require('cors')
const funcionariosRoutes = require('./src/funcionarios/routes')
const requisicoesRoutes = require('./src/requisicoes/routes')

const app = express();
const port = 3000;

//app.use(express.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!!!");
})

app.use('/funcionarios', funcionariosRoutes);

app.use('/requisicoes', requisicoesRoutes); 

app.listen(port, () => console.log(`app listening on port ${port}`));
