const Produto = require('../models/produto')


async function getAll( req, res) {
    const produtos =  await Produto.find()
    res.json (produtos)    
}

async function create (req, res) {
    try {
        const produto = new Produto (req.body)
        const produtoCriado = await produto.save()
        res.status(201).json(produtoCriado)

    }catch (error){
        console.log(error)
        res.status(500).json({mensagem: "Ocorreu um erro ao cadastrar produto", erro: error})
    }

}


// // PARA CASA 
// getbyId
async function getById(req, res) {
    const produto = await Produto.findById(req.params.id)
    if (produto) {
        res.json(produto)
    } else {
        res.status(404).json({ mensagem: "Produto não encontrato!" })
    }
}
// update
async function update(req, res) {
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body)
        res.json(produto)
    } catch (error) {
        console.error("Erro ao criar produto: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar produto!",
            erro: error.message
        })
    }
}

// delete
async function remove(req, res) {
    await Produto.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Produto excluido com sucesso!" })
}




module.exports = {
    getAll, create, getById, update, remove
}