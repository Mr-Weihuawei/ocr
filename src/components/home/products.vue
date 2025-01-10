<template>
    <div class="app-container">
      <h1 class="title">热门产品</h1>
      <div class="main-layout">
        <!-- 左侧布局：卡片1 -->
        <div class="card large-card">
          <h2 class="card-title text-orange">票证核验识别模型</h2>
          <div class="button-group">
            <button class="btn">票证核验</button>
            <button class="btn">票证转换</button>
            <button class="btn">智能识别模型</button>
            <button class="btn">智能识别算法</button>
            <button class="btn">私有化部署</button>
            <button class="btn">数据安全追踪</button>
          </div>
          <p class="description">
            覆盖各大识别场景，深度模型学习方法<br />
            提供弹性服务，扩展性好，算法大模型
          </p>
          <a href="#" class="link">了解详情 ></a>
        </div>
  
        <!-- 右侧布局：卡片2-5 -->
        <div class="grid-container">
          <!-- 卡片2 -->
          <div class="card">
            <h2 class="card-title">个人证照识别模型</h2>
            <div class="button-group">
              <button class="btn">身份证</button>
              <button class="btn">银行卡</button>
              <button class="btn">国际护照</button>
            </div>
            <a href="#" class="link">了解详情 ></a>
          </div>
  
          <!-- 卡片3 -->
          <div class="card">
            <h2 class="card-title">票据凭证识别模型</h2>
            <div class="button-group">
              <button class="btn">混贴发票</button>
              <button class="btn">火车票</button>
              <button class="btn">报关单</button>
              <button class="btn">流水单</button>
            </div>
            <a href="#" class="link">了解详情 ></a>
          </div>
  
          <!-- 卡片4 -->
          <div class="card">
            <h2 class="card-title">企业资质识别模型</h2>
            <div class="button-group">
              <button class="btn">营业执照</button>
              <button class="btn">生产许可证</button>
            </div>
            <a href="#" class="link">了解详情 ></a>
          </div>
  
          <!-- 卡片5 -->
          <div class="card">
            <h2 class="card-title">车辆物流识别模型</h2>
            <div class="button-group">
              <button class="btn">行驶证</button>
              <button class="btn">车牌</button>
              <button class="btn">电子面单</button>
              <button class="btn">驾驶证</button>
            </div>
            <a href="#" class="link">了解详情 ></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HotProducts",
  };
  </script>
  
  <style scoped>
  /* 全局容器 */
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* 标题样式 */
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  /* 主布局：左右分开 */
  .main-layout {
    display: flex;
    gap: 20px;
    align-items: stretch; /* 两边卡片等高 */
  }
  
  /* 左侧布局：卡片1 */
  .large-card {
    flex: 1 1 30%; /* 左侧卡片宽度占40% */
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column; /* 保证内容垂直对齐 */
    justify-content: space-between; /* 内容分布均匀 */
  }
  
  /* 右侧布局：网格 */
  .grid-container {
    flex: 1 1 60%; /* 右侧区域宽度占60% */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  /* 单个卡片样式 */
  .card {
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  
  .text-orange {
    color: #ff6600;
  }
  
  /* 按钮组 */
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 16px;
  }
  
  .btn {
    flex: 1 1 45%;
    padding: 8px 16px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    /* background-color: #e0e0e0; */
  }
  
  /* 描述文字 */
  .description {
    font-size: 14px;
    color: #888;
    line-height: 1.6;
    margin-bottom: 12px;
  }
  
  /* 链接 */
  .link {
    color: #ff6600;
    text-decoration: none;
    font-size: 14px;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  