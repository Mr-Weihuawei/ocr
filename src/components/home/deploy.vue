<template>
    <div class="deployment-container">
      <h1 class="title">部署形式</h1>
      <div class="deployment-layout">
        <!-- 左侧私有化部署 -->
        <div class="deployment-item">
          <h2 class="deployment-title">
            <span class="highlight-bar"></span> 私有化部署
          </h2>
          <p class="deployment-description">
            可部署至本地服务器，在私有化环境中使用智能文字识别产品，
            支持 CPU/GPU 环境及国产化操作系统部署。
          </p>
        </div>
        <!-- 右侧 API 部署 -->
        <div class="deployment-item">
          <h2 class="deployment-title">
            <span class="highlight-bar"></span> API 部署
          </h2>
          <p class="deployment-description">
            多年技术沉淀、安全、可靠、迅速的公有云服务，
            可直接调用 API 使用智能文字识别产品。
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DeploymentModes",
  };
  </script>
  
  <style scoped>
  /* 容器样式 */
  .deployment-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
  }
  
  /* 标题样式 */
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  /* 布局样式 */
  .deployment-layout {
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: flex-start;
  }
  
  /* 单个部署块样式 */
  .deployment-item {
    flex: 1 1 45%;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  /* 部署标题 */
  .deployment-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }
  
  .highlight-bar {
    display: inline-block;
    width: 4px;
    height: 24px;
    background-color: #ff6600;
    margin-right: 8px;
  }
  
  .deployment-description {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
  </style>
  