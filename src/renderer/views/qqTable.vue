
<!--局部样式-->
<style scoped>
    .viewQQTable {

    }
</style>

<!--全局局部覆盖样式-->
<style>

</style>

<template>
    <div class="viewQQTable">
        <el-table
            :data="list"
            stripe
            border>
            <el-table-column
                prop="title"
                :show-overflow-tooltip="true"
                label="群名称">
            </el-table-column>
            <el-table-column
                prop="joinGroupNum"
                label="群号">
            </el-table-column>
            <el-table-column
                prop="summary"
                :show-overflow-tooltip="true"
                label="群简介">
            </el-table-column>
            <el-table-column
                prop="createDate"
                label="群创建日期">
            </el-table-column>
            <el-table-column
                prop="class"
                label="群类型">
            </el-table-column>
            <el-table-column
                prop="mast"
                label="Mast">
            </el-table-column>
            <el-table-column
                prop="nick"
                label="群内昵称">
            </el-table-column>
            <el-table-column
                prop="auth"
                label="群内权限">
            </el-table-column>
            <el-table-column
                prop="gender"
                label="群内性别">
            </el-table-column>
            <el-table-column
                prop="age"
                label="群内年龄">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "viewQQTable",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                //#endregion

                //#region 页面内容绑定数据
                    list: [],
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
        async mounted () {
            let result = await this.$api.queryQQTable(783645);
            this.list = result;
            console.log(this.list);
        },
        components: {

        },
    };
</script>

