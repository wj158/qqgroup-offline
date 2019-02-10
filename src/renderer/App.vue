
<!--局部样式-->
<style scoped>
    #app {
        width: 100%;
        height: 100%;
    }

    .menuTitleWarp {
        display: flex;
        align-items: center;
    }
    .menuTitleWarp > i {
        margin-right: 3px;
    }

    .myHeader {
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 2px 1px #eee;
    }
</style>

<!--全局局部覆盖样式-->
<style>
    html, body {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    }

    a {
        color: #409EFF;
        text-decoration: none;
    }
</style>

<template>
    <el-container id="app">
        <el-aside width="200px">
            <uiMenu></uiMenu>
        </el-aside>
        <el-container>
            <el-header class="myHeader">
                <uiSearch></uiSearch>
            </el-header>
            <el-main>
                <router-view></router-view>
                <!-- <el-button type="primary" @click="handleClick">你好，世界</el-button> -->
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "app",
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
                handleClick () {
                    this.$message({
                        type: "success",
                        message: "按钮点击成功",
                    });
                    this.$electron.ipcRenderer.send("nihao", 1982775886);
                },
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

