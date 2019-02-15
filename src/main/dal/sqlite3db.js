
// 封装的SQLite3数据库访问类
const SQLite3 = require("sqlite3").verbose();

export default class SQLite3DB {
    // 构造函数
    constructor (path) {
        this.dbPath = path;
        this.db = SQLite3.Database(this.dbPath);
    }

    // 数据库查询，异步方法
    query (sqlStr, params) {
        return new Promise((resolve, reject) => {
            this.db.all(sqlStr, params, (e, rows) => {
                if (!e) {
                    resolve(rows);
                }
                else {
                    reject(e);
                }
            });
        });
    }

    // 数据库关闭，异步方法
    close () {
        return new Promise((resolve, reject) => {
            this.db.close(e => {
                if (!e) {
                    resolve();
                }
                else {
                    reject(e);
                }
            });
        });
    }
};