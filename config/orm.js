const connection = require('./connection');

async function selectAll() {
    return new Promise((resolve) => {
        var query = 'SELECT * FROM burgers';
        connection.query(query,
            (err, res) => {
                if (err) throw err;
                resolve({ result: !err, res });
            });
    });
}

async function insertOne(burger_name) {
    return new Promise((resolve) => {
        var query = 'INSERT INTO burgers SET ?';
        connection.query(query,
            [{
                burger_name: burger_name
            }], (err) => {
                if (err) throw err;
                resolve({ result: !err });
            });
    });
}

async function updateOne(id, burger_name) {
    return new Promise((resolve) => {
        var query = 'UPDATE burgers SET ? WHERE ?';
        connection.query(query,
            [
                {
                    burger_name: burger_name
                },
                {
                    id: id
                }
            ],
            (err, res) => {
                if (err) throw err;
                resolve({ result: !err });
            });
    });
}


module.exports = {
    selectAll,
    insertOne,
    updateOne
}
