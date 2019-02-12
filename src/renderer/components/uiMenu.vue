
<!--局部样式-->
<style scoped>
    .uiMenu {
        height: 100%;
    }
</style>

<!--全局局部覆盖样式-->
<style>

</style>

<template>
    <el-menu
        class="uiMenu"
        :router="true"
        :default-openeds="['qq', 'group']">
        <el-submenu index="qq">
            <template slot="title">
                <div class="menuTitleWarp">
                    <i class="icon icon-QQ"></i>
                    <span>查QQ</span>
                </div>
            </template>
            <el-menu-item index="/qqextgraph">二层关系图</el-menu-item>
            <el-menu-item index="/qqtable">加群表</el-menu-item>
            <el-menu-item index="/qqgraph">加群图</el-menu-item>
        </el-submenu>
        <el-submenu index="group">
            <template slot="title">
                <div class="menuTitleWarp">
                    <i class="icon icon-weibiaoti1"></i>
                    <span>查群</span>
                </div>
            </template>
            <el-menu-item index="/grouptable">成员表</el-menu-item>
            <el-menu-item index="/groupgraph">成员图</el-menu-item>
        </el-submenu>
        <el-submenu index="sys">
            <template slot="title">
                <div class="menuTitleWarp">
                    <i class="icon icon-shezhi"></i>
                    <span>系统</span>
                </div>
            </template>
            <el-menu-item index="/setting">设置</el-menu-item>
            <el-menu-item index="/helper">帮助</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "uiMenu",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                //#endregion

                //#region 页面内容绑定数据
                //#endregion

                //#region 页面样式绑定数据
                //#endregion
            };
        },
        watch: {

        },
        computed: {
            //#region 常量计算属性
            //#endregion

            //#region 数据转换计算属性
            //#endregion

            //#region 样式计算属性
            //#endregion
        },
        methods: {
            //#region 页面事件方法
            //#endregion

            //#region 业务逻辑方法
            //#endregion

            //#region 接口访问方法
            //#endregion

            //#region 数据转换方法
            //#endregion

            //#region 自动样式方法
            //#endregion

            //#region 其他方法
            //#endregion
        },
        created () {

        },
        mounted () {

        },
        components: {

        },
    };
</script>

