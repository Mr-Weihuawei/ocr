<template>
    <div class="highlights-section">
      <h2 class="section-title">平台亮点</h2>
      <div class="highlights-container">
        <!-- 第一项 -->
        <div class="highlight-item">
          <h3>
            <span class="highlight-icon"></span>能力全面
          </h3>
          <p>
            多样化的识别引擎，支持文字、证件、企业资质证明、各类票据、各类单据、合同文档、手写字据等多种类型，
            可应用于银行、保险、证券、供应链、地产、医疗、物流等多行业场景。
          </p>
        </div>
  
        <!-- 第二项 -->
        <div class="highlight-item">
          <h3>
            <span class="highlight-icon"></span>准确率高
          </h3>
          <p>
            深度学习模型，支持各类图片文字的自动定位和识别，印刷体整体识别准确率达95%以上，
            手写体达90%以上，保证99.5%以上产品可用性。
          </p>
        </div>
  
        <!-- 第三项 -->
        <div class="highlight-item">
          <h3>
            <span class="highlight-icon"></span>服务安全
          </h3>
          <p>
            与各大厂服务器合作，支持配置部署方式，自行监控数据使用及流向，保证数据安全。
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HighlightsSection",
  };
  </script>
  
  <style scoped>
  .highlights-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 60px;
    background-color: #fff;
    text-align: center;
  }
  
  .section-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  .highlights-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;
  }
  
  .highlight-item {
    width: 33%; /* 每项占三分之一宽度 */
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  
  .highlight-item h3 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .highlight-icon {
    width: 4px;
    height: 20px;
    background-color: rgba(255, 152, 0, 1); /* 橙色条 */
    display: inline-block;
    margin-right: 8px;
  }
  
  .highlight-item p {
    font-size: 14px;
    color: #666;
    /* line-height: 1.8; */
    margin-top: 10px;
    margin-left: 10px;
    width: 270px;
  }
  </style>
  