
const remote = require('electron').remote;
const { dialog } = require('electron').remote;
const API = remote.getGlobal("API");

export default {
    dbCheckSelect () {
        let dbPath = localStorage.getItem("dbPath");
        if (!dbPath) {
            dbPath = API.getAppDirDBPath();
        }
    },
};