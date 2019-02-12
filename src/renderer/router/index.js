import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/qqgraph/:id",
            name: "viewQQGraph",
            component: () => import("../views/qqGraph"),
        },
        {
            path: "/groupgraph/:id",
            name: "viewGroupGraph",
            component: () => import("../views/groupGraph"),
        },
        {
            path: "/qqextgraph/:id",
            name: "viewQQExtGraph",
            component: () => import("../views/qqExtGraph"),
        },
        {
            path: "/qqtable/:id",
            name: "viewQQTable",
            component: () => import("../views/qqTable"),
        },
        {
            path: "/grouptable/:id",
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
