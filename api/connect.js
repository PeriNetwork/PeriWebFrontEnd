import mysql from "mysql"

export const db = mysql.createConnection({
    host: "143.106.241.3",
    user: "cl201239",
    password: "cl*13072005",
    database: "cl201239",
})