
<!--局部样式-->
<style scoped>
    .uiHead {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .tableImg {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
</style>

<!--全局局部覆盖样式-->
<style>

</style>

<template>
    <div class="uiHead">
        <img class="tableImg" :src="autoImgSrc" />
    </div>
</template>

<script>
    export default {
        name: "uiHead",
        props: {
            type: {
                type: String,
                default: "",
            },
            account: {
                type: Number,
                default: "",
            },
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
                autoImgSrc () {
                    if (this.type == "qq") {
                        return `http://q2.qlogo.cn/headimg_dl?dst_uin=${ this.account }&spec=100`;
                    }
                    else if (this.type == "group") {
                        return `http://p.qlogo.cn/gh/${ this.account }/${ this.account }/100/`;
                    }
                    else {
                        return "";
                    }
                },
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

