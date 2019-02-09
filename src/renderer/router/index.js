import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
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
    ]
})
