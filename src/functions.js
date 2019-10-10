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
    let sql = `SELECT * FROM microbitdata ORDER BY time DESC LIMIT ?`;
    let res;

    res = db.query(sql, [limit]);
    return res;
}

module.exports = {
    showAllData: showAllData
};
