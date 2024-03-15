const con = require('../connect/connect').con;

const create = (req, res) => {
    const {descricao, status, responsavel } = req.body;
    const query = `INSERT INTO tarefas(descricao, status, responsavel) VALUE ('${descricao}', '${status}', '${responsavel}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

const read = (req, res) => {
    const query = 'SELECT * FROM tarefas';
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const update = (req, res) => {
    const id = req.params.id;
    const {descricao, status, responsavel} = req.body;
    let query = `UPDATE tarefas SET descricao = '${descricao}', status = '${status}', responsavel = '${responsavel}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.json(err).end();
        } else {
            result.affectedRows > 0 ? res.json(result).end() : res.json({error: 'Item não encontrado!'}).end();
        }
    })
}

const del = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM tarefas WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

module.exports = { create, read, update, del };

