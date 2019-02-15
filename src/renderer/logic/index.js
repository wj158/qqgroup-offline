
const remote = require('electron').remote;
const { dialog } = require('electron').remote;
const API = remote.getGlobal("API");

export default {
    dbCheckSelect () {
        let dbPath = localStorage.getItem("dbPath");


        
        if (!dbPath) {
            dbPath = API.getAppDirDBPath();
        }
        if (dbPath) {
            localStorage.setItem("dbPath", dbPath);
        }
        else {
            dialog.showOpenDialog({
                title: "请选择QQ群数据库文件",
                properties: ["openFile"],
                filters: [
                    { name: 'SQLite3数据库', extensions: ['db', 'DB'] },
                ],
                message: "请选择QQ群数据库文件",
            }, paths => {
                console.log(paths);
            });
        }
    },
};