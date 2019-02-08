
// 查询SQL
export default {
    queryQQGraphSQL: {
        groupNodes: `
            select
                groupNum as 'nodeGroupNum',
                mast as 'nodeMast',
                createDate as 'nodeCreateDate',
                title as 'nodeTitle',
                [class] as 'nodeClass',
                summary as 'nodeSummary'
            from
                qqJoinGroupInfoTable a
            where
                a.groupNum is not NULL and
                a.qqNum = ?
        `,
        memberNodes: `
            select distinct
                a.qqNum as 'nodeQQNum'
            from
                qqJoinGroupInfoTable a
            where
                a.qqNum = ?
        `,
        links: `
            select
                qqNum as 'linkQQNum',
                nick as 'linkNick',
                age as 'linkAge',
                gender as 'linkGender',
                auth as 'linkAuth',
                joinGroupNum as 'linkGroupNum'
            from
                qqJoinGroupInfoTable a
            where
                a.qqNum = ?
        `,
    },
    queryGroupGraphSQL: {
        groupNodes: `
            select distinct
                groupNum as 'nodeGroupNum',
                mast as 'nodeMast',
                createDate as 'nodeCreateDate',
                title as 'nodeTitle',
                [class] as 'nodeClass',
                summary as 'nodeSummary'
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
        memberNodes: `
            select
                qqNum as 'nodeQQNum'
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
        links: `
            select
                qqNum as 'linkQQNum',
                nick as 'linkNick',
                age as 'linkAge',
                gender as 'linkGender',
                auth as 'linkAuth',
                joinGroupNum as 'linkGroupNum'
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
    },
    queryQQExtGraphSQL: {
        groupNodes: `
            select distinct
                joinGroupNum as 'nodeGroupNum',
                joinMast as 'nodeMast',
                joinCreateDate as 'nodeCreateDate',
                joinTitle as 'nodeTitle',
                joinClass as 'nodeClass',
                joinSummary as 'nodeSummary'
            from
                qqExtView a
            where
                a.joinGroupNum is not NULL and
                a.targetQQNum = ?
        `,
        memberNodes: `
            select distinct
                memberQQNum as 'nodeQQNum'
            from
                qqExtView a
            where
                a.memberQQNum is not NULL and
                a.targetQQNum = ?
        `,
        links: `
            select
                memberQQNum as 'linkQQNum',
                memberNick as 'linkNick',
                memberAge as 'linkAge',
                memberGender as 'linkGender',
                memberAuth as 'linkAuth',
                memberGroupNum as 'linkGroupNum'
            from
                qqExtView a
            where
                a.targetQQNum = ?
        `,
    },
    queryQQTableSQL: {
        table: `
            select
                *
            from
                qqJoinGroupInfoTable a
            where
                qqNum = ?
        `,
    }, 
    queryGroupTableSQL: {
        table: `
            select
                *
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
    },

};