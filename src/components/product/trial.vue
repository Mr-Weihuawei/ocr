<template>
    <div class="trial-container">
      <!-- 标题 -->
      <h2>立即免费试用全场景OCR识别模型能力</h2>
      <!-- 描述 -->
      <p>试用多种模型能力，满意后再订购</p>
      <!-- 按钮 -->
      <button class="trial-button" @click="openPage('/ocr')">立即试用</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "TrialSection",
    methods: {
        openPage(route) {
            this.$router.push(route);
        },
    },
  };
  </script>
  
  <style scoped>
  .trial-container {
    text-align: center;
    padding: 40px 20px;
    background-color: #fff; /* 背景颜色，可根据需要调整 */
  }
  
  .trial-container h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }
  
  .trial-container p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .trial-button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: rgb(255, 87, 34); /* 按钮背景颜色 */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .trial-button:hover {
    background-color: rgb(255, 152, 0); /* 按钮悬停效果 */
  }
  </style>
  