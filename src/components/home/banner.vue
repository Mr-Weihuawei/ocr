<template>
  <div class="banner">
    <div class="banner-content">
      <slot name="banner">
      </slot>
    </div>
    <div class="banner-overlay"></div>
  </div>
</template>

<script>

</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 300px;
  /* 设置横幅高度 */
  background: url('@/assets/banner.png') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  overflow: hidden;
}

.banner-content {
  text-align: left;
  color: white;
  z-index: 2;
  margin-left: 200px;
}

.banner-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.banner-description {
  font-size: 16px;
  margin-bottom: 20px;
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

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
  z-index: 1;
}
</style>