
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
        :default-openeds="['1', '2']">
        <el-submenu index="1">
            <template slot="title">
                <div class="menuTitleWarp">
                    <i class="icon icon-QQ"></i>
                    <span>查QQ</span>
                </div>
            </template>
            <el-menu-item index="1-1">二层关系图</el-menu-item>
            <el-menu-item index="1-2">加群表</el-menu-item>
            <el-menu-item index="1-3">加群图</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <div class="menuTitleWarp">
                    <i class="icon icon-weibiaoti1"></i>
                    <span>查群</span>
                </div>
            </template>
            <el-menu-item index="2-1">成员表</el-menu-item>
            <el-menu-item index="2-2">成员图</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <div class="menuTitleWarp">
                    <i class="icon icon-shezhi"></i>
                    <span>系统</span>
                </div>
            </template>
            <el-menu-item index="3-1">设置</el-menu-item>
            <el-menu-item index="3-2">帮助</el-menu-item>
            <el-menu-item index="3-3">关于</el-menu-item>
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

