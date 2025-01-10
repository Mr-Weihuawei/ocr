<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="homepage">
        <Banner>
            <template #banner>
                <h1 class="banner-title">智能文档处理模型服务平台IDP</h1>
                <p class="banner-description">
                    票据 | 证照 | 物流 | 企业资质 | 自定义文档识别模型
                </p>
                <el-button type="primary" size="large" @click="openPage('/product')" class="banner-button">
                    免费体验
                </el-button>
            </template>
        </Banner>
        <Feature />
        <Products />
        <Deploy />
    </div>
</template>

<script>
import Banner from "@/components/home/banner.vue"
import Feature from "@/components/home/feature.vue"
import Products from "@/components/home/products.vue"
import Deploy from "@/components/home/deploy.vue"
export default {
    components: {
        Banner,
        Feature,
        Products,
        Deploy
    },
    methods: {
        openPage(route) {
            this.$router.push(route);
        },
    },
};
</script>

<style scoped>
.homepage {
    font-family: Arial, sans-serif;
    text-align: center;
    color: #333;
}

.banner-button {
    background-color: rgba(255, 87, 34, 1);
    /* 按钮背景色 */
    border-color: rgba(255, 87, 34, 1);
    /* 按钮边框色 */
    color: white;
    /* 按钮文字色 */
    border-radius: 20px;
    /* 按钮圆角 */
    padding: 10px 20px;
    font-size: 16px;
}

.banner-button:hover {
    background-color: rgba(255, 87, 34, 0.8);
    /* 按钮悬停效果 */
    border-color: rgba(255, 87, 34, 0.8);
}
</style>
