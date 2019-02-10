
const SQLite3 = require("sqlite3").verbose();
const db = new SQLite3.Database("./qqgroup.db");
import sql from "../sql";

// 这里封装了一个简单的异步数据库查询方法
function query (sqlStr, params) {
    return new Promise((resolve, reject) => {
        db.all(sqlStr, params, (e, rows) => {
            if (!e) {
                resolve(rows);
            }
            else {
                reject(e);
            }
        });
    });
}

export default {
    // 查询QQ加群图
    async queryQQGraph (qqNum) {
        let groupNodes = await query(sql.queryQQGraphSQL.groupNodes, qqNum);
        let memberNodes = await query(sql.queryQQGraphSQL.memberNodes, qqNum);
        let links = await query(sql.queryQQGraphSQL.links, qqNum);
        return {
            groupNodes,
            memberNodes,
            links,
        };
    },
    // 查询群信息图
    async queryGroupGraph (groupNum) {
        let groupNodes = await query(sql.queryGroupGraphSQL.groupNodes, groupNum);
        let memberNodes = await query(sql.queryGroupGraphSQL.memberNodes, groupNum);
        let links = await query(sql.queryGroupGraphSQL.links, groupNum);
        return {
            groupNodes,
            memberNodes,
            links,
        };
    },
    // 查询QQ关系二层迭代图
    async queryQQExtGraph (qqNum) {
        let groupNodes = await query(sql.queryQQExtGraphSQL.groupNodes, qqNum);
        let memberNodes = await query(sql.queryQQExtGraphSQL.memberNodes, qqNum);
        let links = await query(sql.queryQQExtGraphSQL.links, qqNum);
        return {
            groupNodes,
            memberNodes,
            links,
        };
    },
    // 查询QQ加群表格
    async queryQQTable (qqNum) {
        let list = await query(sql.queryQQTableSQL.table, qqNum);
        return list;
    },
    // 查询群信息表格
    async queryGroupTable (groupNum) {
        let list = await query(sql.queryGroupTableSQL.table, groupNum);
        return list;
    },
    close () {
        return new Promise((resolve, reject) => {
            db.close(e => {
                if (!e) {
                    resolve();
                }
                else {
                    reject(e);
                }
            });
        });
    },
};