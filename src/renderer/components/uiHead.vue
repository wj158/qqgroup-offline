
<!--局部样式-->
<style scoped>
    .uiHead {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .uiHead > img {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    .uiHead > img.bigImg {
        width: 64px;
        height: 64px;
    }
</style>

<!--全局局部覆盖样式-->
<style>

</style>

<template>
    <div class="uiHead">
        <img :class="{ bigImg: big }" :src="autoImgSrc" />
        <div
            v-if="text"
            :style="autoTextStyle">
            {{ autoText }}
        </div>
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
            id: {
                type: Number,
                default: "",
            },
            big: {
                type: Boolean,
                default: false,
            },
            text: {
                type: Boolean,
                default: false,
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
                        return `http://q2.qlogo.cn/headimg_dl?dst_uin=${ this.id }&spec=100`;
                    }
                    else if (this.type == "group") {
                        return `http://p.qlogo.cn/gh/${ this.id }/${ this.id }/100/`;
                    }
                    else {
                        return "";
                    }
                },

                autoText () {
                    if (this.type == "qq") {
                        return `QQ：${ this.id }`;
                    }
                    else if (this.type == "group") {
                        return `QQ群：${ this.id }`;
                    }
                    else {
                        return "";
                    }     
                },
            //#endregion

            //#region 样式计算属性
                autoTextStyle () {
                    return {
                        fontSize: this.big ? "14px" : "12px",
                        marginTop: this.big ? "10px" : "4px",
                    };
                },
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

