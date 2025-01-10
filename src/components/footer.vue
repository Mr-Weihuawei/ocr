<template>
    <footer class="footer-container">
      <div class="footer-content">
        <!-- 产品服务 -->
        <div class="footer-column">
          <h3 class="footer-title">产品服务</h3>
          <ul>
            <li>个人证照识别模型</li>
            <li>票据凭证识别模型</li>
            <li>企业资质识别模型</li>
            <li>车辆物流识别模型</li>
            <li>票证核验识别模型</li>
          </ul>
        </div>
        <!-- 应用方案 -->
        <div class="footer-column">
          <h3 class="footer-title">应用方案</h3>
          <ul>
            <li>公共模型的 API 使用方案</li>
            <li>私有化模型 API 使用方案</li>
            <li>模型+审核工具的使用方案</li>
            <li>多模型+模型分类补充方案</li>
            <li>模型本地化部署方案</li>
          </ul>
        </div>
        <!-- 资源中心 -->
        <div class="footer-column">
          <h3 class="footer-title">资源中心</h3>
          <ul>
            <li>接口文档</li>
            <li>行业白皮书</li>
            <li>影刀插件</li>
            <li>WPS 插件</li>
            <li>驱动插件</li>
            <li>UiBot 插件</li>
            <li>低代码平台插件</li>
            <li>大模型平台插件</li>
          </ul>
        </div>
        <!-- 模型生成 Studio -->
        <div class="footer-column">
          <h3 class="footer-title">模型生成 Studio</h3>
          <ul>
            <li>工具介绍</li>
            <li>定制模型课堂</li>
          </ul>
        </div>
        <!-- 关于我们 -->
        <div class="footer-column">
          <h3 class="footer-title">关于我们</h3>
          <ul>
            <li>公司使命</li>
            <li>公司产品发展历程</li>
            <li>公司地址</li>
            <li>合作伙伴</li>
            <li>申请合作伙伴</li>
          </ul>
        </div>
      </div>
      <!-- 右下角公司信息 -->
      <div class="footer-company-info">
        <p>上海XXX科技有限公司</p>
        <p>地址：XXXX</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer-container {
    background-color: #f9f9f9;
    padding: 40px 20px;
    border-top: 1px solid #ddd;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  /* 每个列的样式 */
  .footer-column {
    flex: 1 1 18%;
    margin-bottom: 20px;
  }
  
  .footer-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
  }
  
  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-column li {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
  }
  
  /* 公司信息独立列样式 */
  .footer-company-info {
    max-width: 1200px;
    margin: 20px auto 0;
    text-align: right;
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
  </style>
  