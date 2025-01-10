<template>
  <div id="app">
    <el-header class="header">
      <!-- 左侧 Logo -->
      <div class="logo">智刃</div>

      <!-- 中间菜单栏 -->
      <el-menu :default-active="activeMenu" mode="horizontal" class="menu-bar" @select="handleMenuSelect">
        <el-menu-item index="1" @click="navigateTo('/')">首页</el-menu-item>

        <!-- 产品展示二级菜单 -->
        <el-sub-menu index="2" popper-class="custom-dropdown">
          <template #title>产品展示</template>
          <div class="dropdown-content">
            <div class="dropdown-column" v-for="(group, index) in menuGroups" :key="index">
              <h4>{{ group.title }}</h4>
              <ul>
                <li v-for="(item, idx) in group.items" :key="idx" @click="subMenunavigateTo('/product','2', idx, item)">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </el-sub-menu>

        <!-- 应用方案二级菜单 -->
        <el-sub-menu index="3" popper-class="custom-dropdown">
          <template #title>应用方案</template>
          <div class="dropdown-content">
            <div class="dropdown-column">
              <ul>
                <li>公共模型的API使用方案</li>
                <li>私有化模型的API使用方案</li>
                <li>模型+审核工具的使用方案</li>
                <li>多模型+模型分类+审核工具的使用方案</li>
              </ul>
            </div>
          </div>
        </el-sub-menu>

        <!-- 资源中心二级菜单 -->
        <el-sub-menu index="4" popper-class="custom-dropdown">
          <template #title>资源中心</template>
          <div class="dropdown-content">
            <div class="dropdown-column">
              <ul>
                <li>接口文档</li>
                <li>行业白皮书</li>
                <li>WPS插件</li>
                <li>影刀插件</li>
                <li>弘玑插件</li>
                <li>Uibot插件</li>
                <li>低代码平台插件</li>
                <li>大模型平台插件</li>
              </ul>
            </div>
          </div>
        </el-sub-menu>

        <!-- 模型生态Studio二级菜单 -->
        <el-sub-menu index="5" popper-class="custom-dropdown">
          <template #title>模型生态Studio</template>
          <div class="dropdown-content">
            <div class="dropdown-column">
              <ul>
                <li>工具介绍</li>
                <li>定制模型步骤</li>
              </ul>
            </div>
          </div>
        </el-sub-menu>

        <el-menu-item index="6">关于我们</el-menu-item>
      </el-menu>

      <!-- 右侧搜索框和用户操作 -->
      <div class="right-section">
        <!-- 搜索框 -->
        <el-input
          v-model="searchQuery"
          placeholder="关键词"
          class="search-input"
          clearable
        >
          <template #append>
            <!-- icon="el-icon-search" -->
            <el-button  @click="handleSearch">搜索</el-button>
          </template>
        </el-input>

        <!-- 用户操作 -->
        <span class="action">控制台</span>
        <span class="action">登录</span>
        <el-button type="primary" class="register-btn">免费注册</el-button>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: "1", // 默认激活的菜单项
      searchQuery: "", // 搜索框内容
      menuGroups: [
        {
          title: "个人证件识别模型",
          items: ["身份证识别", "银行卡识别", "国际驾照识别", "中国护照识别", "户口本识别", "社保卡识别"],
        },
        {
          title: "票据凭证识别模型",
          items: ["火车票识别", "增值税发票识别", "机打发票识别", "非税收入票据识别"],
        },
        {
          title: "企业资质识别模型",
          items: ["营业执照识别", "银行开户许可证识别", "食品生产许可证识别"],
        },
        {
          title: "车辆物流识别模型",
          items: ["行驶证识别", "车牌识别", "车辆vin码识别"],
        },
        {
          title: "票证核验识别模型",
          items: ["营业执照验真", "发票验真", "电子发票验真PDF"],
        },
      ],
    };
  },
  methods: {
    handleSearch() {
      console.log("搜索内容：", this.searchQuery);
      // 可根据实际需求添加搜索逻辑
    },
    handleMenuSelect(index) {
      // 更新activeMenu为选中的index
      this.activeMenu = index;
    },
    subMenunavigateTo(url,parentIndex, childIndex, itemName){
      this.activeMenu = parentIndex;
      console.log("选中的二级菜单项:", itemName);
      this.navigateTo(url); // 可以根据需求调整跳
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
/* 顶部菜单栏整体样式 */
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* 左侧 Logo 样式 */
.logo {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-right: 20px;
}

/* 菜单栏样式 */
.menu-bar {
  flex: 1;
  margin-left: 20px;
}

.el-menu {
  background-color: transparent;
  border-bottom: none;
}

.el-menu-item {
  font-size: 14px;
  color: #333;
  padding: 10px 15px;
  text-decoration: none; /* 去掉默认的下划线 */
}

.el-menu-item:hover,
.el-menu-item.is-active {
  color: #f0563a;
  background-color: transparent; /* 去掉选中的背景色 */
  text-decoration: underline; /* 恢复下划线 */
}

/* 子菜单项样式 */
.el-sub-menu__title {
  font-size: 14px;
  color: #333;
  padding: 10px 15px;
}

.el-sub-menu__title:hover {
  color: #f0563a;
}

/* 二级菜单样式 */
.custom-dropdown {
  padding: 0;
  position: absolute;
  left: 0;
  width: 100vw;
  margin-top: 0;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-content {
  display: flex;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
}

.dropdown-column {
  margin-right: 40px;
}

.dropdown-column h4 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.dropdown-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-column ul li {
  font-size: 13px;
  color: #666;
  margin-bottom: 5px;
  cursor: pointer;
}

.dropdown-column ul li:hover {
  color: #f0563a;
}

/* 右侧搜索和按钮区域 */
.right-section {
  display: flex;
  align-items: center;
}

.search-input {
  width: 200px;
  margin-right: 20px;
}

.action {
  margin-right: 15px;
  color: #333;
  cursor: pointer;
}

.register-btn {
  background-color: #f0563a;
  border-color: #f0563a;
}

.register-btn:hover {
  background-color: #d94b2e;
  border-color: #d94b2e;
}
</style>
