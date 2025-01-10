<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="homepage">
    <Banner>
      <template #banner>
        <h1 class="banner-title">
          个人证照识别模型</h1>
        <p class="banner-description" style="width: 600px;">
          基于行业领先的智能文字识别技术，融合不同行业和场景，支持身份证、银行卡、营业执照、名片、港澳台证件等多种国内外常见卡证高精准度识别，可应用于用户注册、身份认证、金融开户、交通出行、政务等多种场景
        </p>
        <el-button type="primary" size="large" class="banner-button"  @click="openPage('/ocr')">
        免费体验
      </el-button>
      </template>
    </Banner>
    <Section />
    <Tab />
    <Trial />
  </div>
</template>

<script>
import Banner from "@/components/home/banner.vue"
import Tab from "@/components/product/tab.vue"
import Section from "@/components/product/section.vue"
import Trial from "@/components/product/trial.vue"

export default {
  components: {
    Banner,
    Tab,
    Section,
    Trial
  },
  methods: {
        openPage(route) {
            this.$router.push(route);
        },
    },
};
</script>

<style scoped>
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
