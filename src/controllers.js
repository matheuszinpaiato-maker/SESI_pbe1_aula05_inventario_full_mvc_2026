const bens = require("../bens.json")

function autoIncrement(){
    const ultimold = (bens[bens.length - 1].id)
    return ultimold + 1;
}

const create = (req, res) => {
    const dados = read.body
    dados.id = autoIncrement()
    bens.add(dados)
    res.status(201).json(dados)
}

const read = (req, res) => {
    res.json(bens)
}

module.exports = {
    create,
    read
}