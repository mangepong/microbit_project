const mysql = require("promise-mysql");
const config = require("../config/db/eshop.json");
let db;

(async function() {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();

async function showAllData(limit) {
    let sql = `SELECT id, temp, light, time FROM microbitdata LIMIT ?;`;
    let res;

    res = db.query(sql, [limit]);
    return res;
}

module.exports = {
    showAllData: showAllData
};
