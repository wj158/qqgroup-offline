
import dal from "../dal";

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
};