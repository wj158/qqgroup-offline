
<!--局部样式-->
<style scoped>
    .viewGroupTable {

    }
</style>

<!--全局局部覆盖样式-->
<style>

</style>

<template>
    <div class="viewGroupTable">
        <uiHead
            style="margin-bottom: 16px;"
            type="group"
            :id="id"
            :big="true"
            :text="true">
        </uiHead>
        <el-table
            :data="list"
            stripe
            border>
            <el-table-column
                width="70"
                label="头像">
                <template slot-scope="scope">
                    <router-link :to="`/qqtable?id=${ scope.row.qqNum }`">
                        <uiHead
                            type="qq"
                            :id="scope.row.qqNum">
                        </uiHead>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column
                label="群内昵称">
                <template slot-scope="scope">
                    <router-link :to="`/qqtable?id=${ scope.row.qqNum }`">{{ scope.row.nick }}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                width="110"
                label="QQ号">
                <template slot-scope="scope">
                    <router-link :to="`/qqtable?id=${ scope.row.qqNum }`">{{ scope.row.qqNum }}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="auth"
                width="70"
                label="群内权限">
                <template slot-scope="scope">
                    <span v-if="scope.row.auth == 1">群主</span>
                    <span v-if="scope.row.auth == 2">管理员</span>
                    <span v-if="scope.row.auth == 4">群员</span>
                </template>
            </el-table-column>
            <el-table-column
                width="70"
                label="群内性别">
                <template slot-scope="scope">
                    <span v-if="scope.row.gender == 0">男</span>
                    <span v-if="scope.row.gender == 1">女</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="age"
                width="70"
                label="群内年龄">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "viewGroupTable",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                //#endregion

                //#region 页面内容绑定数据
                    id: 0,
                    list: [],
                //#endregion

                //#region 页面样式绑定数据
                //#endregion
            };
        },
        watch: {
            "$route": "handleRouteChange",
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
                    this.b_updateTable(this.$route.query.id, this.$route.query.head);
                },
            //#endregion

            //#region 业务逻辑方法
                async b_updateTable (id, head) {
                    if (!id) {
                        id = 60623498;
                    }
                    this.id = Number(id);
                    if (!head) {
                        head = false;
                    }
                    this.list = await this.$api.queryGroupTable(id);
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
            this.handleRouteChange();
        },
        components: {

        },
    };
</script>

