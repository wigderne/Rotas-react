const clientes = [
    {'id' : 1, 'nome':'Wigder', 'email':'wigderne@gmail.com', 'telefone': '21981233514'},
    {'id' : 2, 'nome':'João', 'email':'wigderne@gmail.com', 'telefone': '21981233514'},
    {'id' : 3, 'nome':'Maria', 'email':'wigderne@gmail.com', 'telefone': '21981233514'},
]

getClients = (req, res) => {
    res.status(200).send(clientes);
}

getOneClient = (req, res) => {
    let id = req.params.id;
    //console.log(typeof id); verifica o tipo de variavel

    const cliente = clientes.find((item) => item.id  === Number(id) );
    if(cliente){
        res.status(200).send(cliente);
    }else{
        res.status(404).send("Não foi encontrado um cliente com esse ID");
    }
    res.status(200).send(cliente);
}

createClient = (req, res) => {
    const cliente = req.body;
    if(Object.keys(cliente).length>0){
        clientes.push(cliente);
        res.status(201).send(cliente);
    }else{
        res.status(406).send("Não foi possível adicionar o cliente!");
    }

}

updateClient = (req, res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes[indice] = req.body;
    const cliente = clientes.find((item) => item.id  === Number(id) );
    if(cliente){
        res.status(201).send("Cliente atualizado com sucesso!");
    }else{
        res.status(404).send("Não foi encontrado um cliente com esse ID");
    }
}

findClientIndex = (id) => {
    const indice = clientes.findIndex((item) => item.id === Number(id));
    return indice;
}

removeClient = (req,res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes[indice] = req.body;
    const cliente = clientes.find((item) => item.id  === Number(id) );
    if(cliente){
        clientes.splice(indice,1);
        res.status(200).send(`O Cliente de ID ${id} foi removido com sucesso!`);
    }else{
        res.status(404).send("Não foi encontrado um cliente com esse ID");
    }
}

module.exports = {getClients,getOneClient,createClient,updateClient,removeClient};