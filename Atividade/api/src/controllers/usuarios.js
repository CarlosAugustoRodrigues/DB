const con = require('../connect/connect').con;

const create = (req, res) => {
    let {nome, email, senha} = req.body;

    let query = `INSERT TO usuarios (nome, email, senha) VALUES ( '${nome}', '${email}', '${senha}')`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const read = (req, res) => {
    let query = `SELECT * FROM usuarios`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const update = (req, res) => {
    const id = req = req.params.id;
    const {nome, email, senha} = req.body;
    
    let query = `UPDATE usuarios SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}

const del = (req, res) => {
    const id = req = req.params.id;
    let query = `DELETE FROM usuarios WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}

module.exports = { create, read, update, del };

