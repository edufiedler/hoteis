const express = require('express')
const cors = require('cors')
const productsRoutes = require('./src/products/routes');
const funcionariosRoutes = require('./src/funcionarios/routes')
const app = express();
const port = 3000;

//app.use(express.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!!!");
})

app.use('/api/v1/hoteis', productsRoutes);

app.use('/funcionarios', funcionariosRoutes); 

app.listen(port, () => console.log(`app listening on port ${port}`));
