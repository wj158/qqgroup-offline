import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/qqgraph",
            name: "viewQQGraph",
            component: () => import("../views/qqGraph"),
        },
        {
            path: "/groupgraph",
            name: "viewGroupGraph",
            component: () => import("../views/groupGraph"),
        },
        {
            path: "/qqextgraph",
            name: "viewQQExtGraph",
            component: () => import("../views/qqExtGraph"),
        },
        {
            path: "/qqtable",
            name: "viewQQTable",
            component: () => import("../views/qqTable"),
        },
        {
            path: "/grouptable",
            name: "viewGroupTable",
            component: () => import("../views/groupTable"),
        },
        {
            path: "/setting",
            name: "viewSetting",
            component: () => import("../views/setting"),
        },
        {
            path: "/helper",
            name: "viewHelper",
            component: () => import("../views/helper"),
        },
        {
            path: "/about",
            name: "viewAbout",
            component: () => import("../views/about"),
        },
    ]
})
