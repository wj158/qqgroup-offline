
import dal from "../dal";
const fs = require("fs");
const path = require("path");

export default {
    async queryQQGraph (qqNum) {
        let result = await dal.queryQQGraph(qqNum);
        result.groupNodes.forEach(item => {
            item.nodeType = "group";
        });
        result.memberNodes.forEach(item => {
            item.nodeType = "member";
        });
        return {
            nodes: result.groupNodes.concat(result.memberNodes),
            links: result.links,
        };
    },
    async queryGroupGraph (groupNum) {
        let result = await dal.queryGroupGraph(groupNum);
        result.groupNodes.forEach(item => {
            item.nodeType = "group";
        });
        result.memberNodes.forEach(item => {
            item.nodeType = "member";
        });
        return {
            nodes: result.groupNodes.concat(result.memberNodes),
            links: result.links,
        };
    },
    async queryQQExtGraph (qqNum) {
        let result = await dal.queryQQExtGraph(qqNum);
        result.groupNodes.forEach(item => {
            item.nodeType = "group";
        });
        result.memberNodes.forEach(item => {
            item.nodeType = "member";
        });
        return {
            nodes: result.groupNodes.concat(result.memberNodes),
            links: result.links,
        };
    },
    async queryQQTable (qqNum) {
        let result = await dal.queryQQTable(qqNum);
        return result;
    },
    async queryGroupTable (groupNum) {
        let result = await dal.queryGroupTable(groupNum);
        return result;
    },
    async closeDB () {
        
    },
    // 尝试获取应用程序目录下的数据库路径
    getAppDirDBPath () {
        let dbPath = "./qqgroup.db";
        if (fs.existsSync(dbPath)) {
            return path.resolve(dbPath);
        }
        else {
            return undefined;
        }
    },
    // 检查一个文件是否存在
    checkExists (path) {
        if (fs.existsSync(path)) {
            return path.resolve(dbPath);
        }
        else {
            return undefined;
        }
    },
};