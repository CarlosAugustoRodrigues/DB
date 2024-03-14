const con = require('../connect/connect').con;

const create = (req, res) => {
    let {descricao, status ,responsavel} = req.body;

    let query = `INSERT TO tarefas (descricao, status ,responsavel) VALUES ( '${descricao}', '${status}', '${responsavel}')`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const read = (req, res) => {
    let query = `SELECT * FROM tarefas`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const update = (req, res) => {
    const id = req = req.params.id;
    const {descricao, status ,responsavel} = req.body;
    
    let query = `UPDATE tarefas SET descricao = '${descricao}', status = '${status}', responsavel = '${responsavel}' WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}

const del = (req, res) => {
    const id = req = req.params.id;
    let query = `DELETE FROM tarefas WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}

module.exports = { create, read, update, del };

