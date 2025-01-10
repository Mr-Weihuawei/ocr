<!-- getImage(tab) {
    // 根据 Tab 返回对应的图片路径
    switch (tab) {
      case "smart-category":
        return require("@/assets/u57.png");
      case "user-authentication":
        return require("@/assets/u62.png");
      case "merchant-support":
        return require("@/assets/u67.png");
      default:
        return "";
    }
  }, -->

  <template>
    <div>
      <h1>个人证照识别模型</h1>
  
      <!-- Tab 切换按钮 -->
      <div class="tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === tab.name }"
          @click="activeTab = tab.name"
        >
          {{ tab.label }}
        </button>
      </div>
  
      <!-- 左右布局内容区域 -->
      <div class="content-container">
        <!-- 左侧图片区域 -->
        <div class="image-section">
          <img :src="getImage(activeTab)" alt="Tab Image" />
        </div>
  
        <!-- 右侧文本区域 -->
        <div class="text-section">
          <div v-if="activeTab === 'smart-category'">
            <h2>证照智能分类</h2>
            <p>提供身份证、银行卡、名片、营业执照、驾驶证等100 +证照识别模块服务，可满足身份认证、金融开户、征信评估、商户入驻等场景需求。</p>
            <p>支持对18种证件类型识别、分类，包括银行卡、香港身份证、身份证、社保卡、驾驶证、行驶证、户口本、护照、结婚证、离婚证、房产证、不动产证、营业执照、开户许可证、税务登记证等</p>
          </div>
          <div v-if="activeTab === 'user-authentication'">
            <h2>用户身份认证</h2>
            <p>
                卡证文字识别使用身份证、银行卡、护照识别等 OCR 技术，用于政务、银行、金融、O2O、交通出行等应用下的远程用户身份认证，支持自动识别并录入各字段信息，降低用户输入成本，有效提升用户体验。</p>
          </div>
          <div v-if="activeTab === 'merchant-support'">
            <h2>商务职场社交</h2>
            <p>卡证文字识别使用名片识别 OCR 技术，支持快速将纸质名片上的姓名、电话、邮箱、地址等文字转换为结构化信息并保存，可应用于商务交流、线下会议、论坛等社交场景，节约输入成本，提升用户体验。</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: "smart-category", // 默认激活的 Tab
        tabs: [
          { name: "smart-category", label: "智能分类" },
          { name: "user-authentication", label: "用户身份认证" },
          { name: "merchant-support", label: "商务职场社交" },
        ],
      };
    },
    methods: {
        getImage(tab) {
    // 根据 Tab 返回对应的图片路径
    switch (tab) {
      case "smart-category":
        return require("@/assets/u57.png");
      case "user-authentication":
        return require("@/assets/u62.png");
      case "merchant-support":
        return require("@/assets/u67.png");
      default:
        return "";
    }
  },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Tabs 样式 */
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #e0e0e0; /* 底部分隔线 */
  }
  
  button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    color: #333;
    position: relative;
  }
  
  button:hover {
    color: rgb(255, 152, 0); /* 鼠标悬停颜色 */
  }
  
  button.active {
    color: rgb(255, 152, 0); /* 选中字体颜色 */
    font-weight: bold;
  }
  
  button.active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgb(255, 152, 0); /* 下划线颜色 */
    border-radius: 4px;
  }
  
  /* 内容容器样式 */
  .content-container {
    display: flex;
    align-items: flex-start; /* 顶部对齐 */
    gap: 20px;
    margin: 0 auto;
    max-width: 1000px;
    padding: 20px;
    /* border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  }
  
  .image-section {
    flex: 1;
    text-align: center;
  }
  
  .image-section img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
  
  .text-section {
    flex: 1;
    display: flex;
    flex-direction: column; /* 垂直布局 */
    align-items: flex-start; /* 左对齐 */
    justify-content: flex-start; /* 顶部对齐 */
    text-align: left; /* 确保文字内容左对齐 */
    padding: 0; /* 去除任何默认的内边距 */
  }
  
  .text-section h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .text-section p {
    font-size: 16px;
    line-height: 1.5;
  }
  </style>
  