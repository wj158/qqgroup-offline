
<!--局部样式-->
<style scoped>
    .uiSearch {
        display: flex;
        align-items: center;
    }
</style>

<!--全局局部覆盖样式-->
<style>
    .uiSearch .el-input {
        width: 320px;
        margin-right: 12px;
    }
</style>

<template>
    <div class="uiSearch">
        <el-input
            clearable
            placeholder="请输入搜索内容"
            v-model="searchContent"
            @clear="handleSearchClick"
            @keyup.enter.native="handleSearchClick">
            <el-button @click="handleSearchClick" slot="append">查询</el-button>
        </el-input>
        <el-checkbox v-model="showHead">显示头像</el-checkbox>
    </div>
</template>

<script>
    export default {
        name: "uiSearch",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                //#endregion

                //#region 页面内容绑定数据
                    searchContent: "",
                    showHead: false,
                //#endregion

                //#region 页面样式绑定数据
                //#endregion
            };
        },
        watch: {
            "$route.path": "handleRouteChange",

            showHead (nv) {
                localStorage.setItem("showHead", nv);
            },
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
                handleRouteChange () {
                    this.searchContent = "";
                },

                handleSearchClick () {
                    this.b_search();
                },
            //#endregion

            //#region 业务逻辑方法
                b_search () {
                    let num = Number(this.searchContent);
                    if (num === 0 || isNaN(num)) {
                        this.$message({
                            type: "warning",
                            message: "搜索账号非法",
                        });
                    }
                    else {
                        this.$router.push({
                            path: this.$route.path,
                            query: {
                                id: num,
                                head: this.showHead,
                            },
                        });
                    }
                },
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

