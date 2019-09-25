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
    let sql = `SELECT * FROM microbitdata LIMIT ?;`;
    let res;

    res = db.query(sql, [limit]);
    return res;
}


function createRoom(x, y) {
    var div = window.document.createElement("div");
    div.style.width = x.toString() + "px";
    div.style.height = y.toString() + "px";
    div.style.background = "grey";
    div.style.color = "white";
    div.style.border.color = "black";

    window.document.getElementById("main").appendChild(div);
}

module.exports = {
    showAllData: showAllData,
    createRoom: createRoom
};
