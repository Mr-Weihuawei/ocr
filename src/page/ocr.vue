<template>
    <div id="app" class="layout">
        <!-- 左侧菜单栏 -->
        <aside class="sidebar">
            <ul>
                <li 
                    v-for="item in menuItems" 
                    :key="item" 
                    :class="{ selected: selectedMenu === item }" 
                    @click="selectMenu(item)"
                >
                    {{ item }}
                </li>
            </ul>
        </aside>

        <!-- 主内容区域 -->
        <main class="content">
            <!-- 动态显示选中的菜单标题 -->
            <h2>{{ selectedMenu }}</h2>

            <section class="upload-section">
                <!-- 显示 PDF -->
                <div v-if="uploadedImageUrl && uploadedImageUrl.endsWith('.pdf')">
                  <object :data="uploadedImageUrl" type="application/pdf" width="600" height="800">
                    <p>无法显示 PDF 文件，请下载 <a :href="uploadedImageUrl" target="_blank">点击此处下载</a></p>
                  </object>
                </div>
                <!-- 上传文件的大图 -->
                <div class="upload-image-container" v-else>
                    <img :src="uploadedImageUrl" alt="上传文件" class="big-image" />
                </div>

                <!-- 显示历史上传的文件 -->
                <div v-if="uploadedFiles.length > 0">
                    <div class="uploaded-files-container">
                        <ul class="uploaded-files-list">
                            <li v-for="(file, index) in uploadedFiles" :key="index" @click="select_img(file)">
                              <div>
                                <object v-if="file.oss_key.endsWith('.pdf')" :data="file.oss_key" type="application/pdf" style="pointer-events: none;"  class="uploaded-image">

                                </object>
                                <img v-else :src="file.oss_key" :alt="file.oss_key" class="uploaded-image" />                                
                              </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 显示上传次数 -->
                <p>今日可用：{{ uploadCount }}次</p>

                <input type="file" @change="handleFileUpload" multiple :disabled="uploadDisabled" />
                <p>支持的文件格式：png, jpg, jpeg, pdf, bmp, tiff, webp, doc, docx, html, mhtml，文件大小不超过10M。</p>
            </section>
        </main>

              <!-- 右侧结果展示区域 -->
              <aside class="result-sidebar">
            <!-- 购买按钮 -->
            <button class="purchase-button" @click="purchaseModel">购买此模型</button>
            
            <!-- Tab 切换区域 -->
            <div class="tabs">
                <button 
                    v-for="tab in tabs" 
                    :key="tab" 
                    :class="{ active: activeTab === tab }" 
                    @click="activeTab = tab"
                >
                    {{ tab }}
                </button>
            </div>

            <!-- Tab 内容 -->
            <div class="tab-content">
                <div v-if="activeTab === '识别结果'">
                    <div v-if="detailedResult">
                        <ul>
                            <li v-for="(value, key) in detailedResult" :key="key">
                                <strong>{{ key }}:</strong> {{ value }}
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <p>暂无详细识别结果。</p>
                    </div>
                </div>
                <div v-if="activeTab === 'RESPONSE'">
                    <pre>{{ response }}</pre>
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                "个人证照识别模型",
                "票据凭证识别模型",
                "企业资质识别模型",
                "车辆物流识别模型",
                "票证核验识别模型",
            ],
            selectedMenu: "个人证照识别模型", // 默认选中第一项
            ocrResult: null,
            detailedResult: null,
            uploadedFiles: [],
            uploadCount: 0,
            uploadDisabled: false,
            uploadedImageUrl: null,
            pdfUrl: null,
            tabs: ["识别结果", "RESPONSE"], // Tab 选项
            activeTab: "识别结果", // 当前选中的 Tab
            response: "模拟的 RESPONSE 数据\n{\n  \"status\": \"success\",\n  \"data\": { ... }\n}" // 示例 RESPONSE 数据
        };
    },
    methods: {
        // 处理菜单点击
        selectMenu(menu) {
            this.selectedMenu = menu;
        },
        // 模拟购买模型
        purchaseModel() {
            alert(`购买模型 "${this.selectedMenu}" 成功！`);
        },
        // 处理文件上传（保留之前的实现）
        async handleFileUpload(event) {
            const files = event.target.files;
            console.log(files)
            this.selectedFile = event.target.files[0];
            // 检查文件是否是 PDF
            if (this.selectedFile && this.selectedFile.type === 'application/pdf') {
              this.pdfUrl = true
              // this.pdfUrl = URL.createObjectURL(this.selectedFile)
            } else {
              this.pdfUrl = false
            }

          // 创建 FormData 对象
            const formData = new FormData();
            formData.append("file", this.selectedFile);

            try {
              const response = await fetch("http://127.0.0.1:7001/upload/", {
                method: "POST",
                body: formData,
              });
              console.log(response)
              if (response.ok) {
                const result = await response.json();
                console.log("上传成功:", result);
                // 上传成功去调用识别
                const extract_file_response = await fetch("http://127.0.0.1:7001/extract_file/", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",  // 设置请求体的内容类型为 JSON
                  },
                  body: JSON.stringify({ oss_key: result['file_name'] }),
                });
                if (extract_file_response.ok) {
                  const extract_file_result = await extract_file_response.json();
                  console.log("识别成功:", extract_file_result);                  
                } else {
                  console.error("识别失败:", response.statusText);
                }
                
              } else {
                console.error("上传失败:", response.statusText);
              }
            } catch (error) {
              console.error("错误:", error);
            }

            
            if (files.length > 0 && this.uploadCount < 300) {
                this.ocrResult = "OCR 识别结果将显示在这里（模拟结果）";
                this.detailedResult = {
                    文件名: files[0].name,
                    大小: `${(files[0].size / 1024).toFixed(2)} KB`,
                    类型: files[0].type,
                    识别结果: "模拟的详细识别结果",
                };
                this.getUploadedFiles()
                // for (let i = 0; i < files.length; i++) {
                //     const file = files[i];
                //     const fileData = {
                //         name: file.name,
                //         type: file.type,
                //         size: file.size,
                //         url: URL.createObjectURL(file),
                //     };
                //     this.uploadedFiles.push(fileData);
                //     if (this.isImage(file)) {
                //         this.uploadedImageUrl = URL.createObjectURL(file);
                //     }
                // }

                // this.uploadCount += files.length;
                // localStorage.setItem('uploadCount', this.uploadCount.toString());
                // if (this.uploadCount >= 3) {
                //     this.uploadDisabled = true;
                // }
                // console.log
                // this.saveUploadedFiles();
            }
        },
        isImage(file) {
            const imageTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/bmp', 'image/tiff', 'application/pdf'];
            return imageTypes.includes(file.type);
        },
        saveUploadedFiles() {
            localStorage.setItem('uploadedFiles', JSON.stringify(this.uploadedFiles));
        },
        async getUploadedFiles () {
            const params = new URLSearchParams();
            params.append('user_id', '1');
            const url = 'http://127.0.0.1:7001/user_upload';
            const response = await fetch(`${url}?${params.toString()}`);
            if (response.ok) {
                const data = await response.json();
                console.log('获取数据成功，数据如下：', data);
                this.uploadedFiles = data
              this.uploadedImageUrl = data[data.length - 1]['oss_key']
                console.log(this.uploadedImageUrl)
            } else {
                const errorText = await response.text();
                console.error('请求失败，状态码：', response.status, '错误信息：', errorText);
                throw new Error('请求失败');
            }
      },
      select_img (file) {
        console.log(file)
          this.uploadedImageUrl = file.oss_key
          
          // this.pdfUrl = t
      },
          createObjectURL(file) {
      // 使用 URL.createObjectURL 来创建临时的 URL
      this.pdfUrl = URL.createObjectURL(file);
    },
    },
    mounted() {
    this.getUploadedFiles(); // 在mounted钩子中调用methods里的fetchData方法
    }
};
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
    font-family: Arial, sans-serif;
}

.sidebar {
    width: 200px;
    background-color: #f5f5f5;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin: 10px 0;
    cursor: pointer;
    color: #333;
    transition: color 0.3s;
}

.sidebar li.selected {
    color: #007bff;
    font-weight: bold;
}

.sidebar li:hover {
    color: #0056b3;
}

.content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.content h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}
.uploaded-files-container {
    display: flex;
    overflow-x: auto; /* 横向滚动 */
    white-space: nowrap;
    padding: 10px 0;
    border: 1px solid #ddd; /* 增加边框区分 */
    border-radius: 5px;
    background-color: #f9f9f9;
}

.uploaded-files-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.uploaded-files-list li {
    flex: 0 0 auto; /* 固定大小，不会被拉伸 */
    margin-right: 10px; /* 图片间距 */
    text-align: center; /* 居中对齐 */
}

.uploaded-image {
    width: 80px; /* 固定宽度 */
    height: 80px; /* 固定高度 */
    object-fit: cover; /* 确保图片填充尺寸，同时保持比例 */
    border-radius: 5px; /* 圆角效果 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    cursor: pointer; /* 鼠标悬停时显示为可点击 */
    transition: transform 0.3s; /* 添加缩放动画 */
}

.big-image {
    width: 600px; /* 固定宽度 */
    height: 600px; /* 固定高度 */
    object-fit: cover; /* 确保图片填充尺寸，同时保持比例 */
    border-radius: 5px; /* 圆角效果 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    cursor: pointer; /* 鼠标悬停时显示为可点击 */
    transition: transform 0.3s; /* 添加缩放动画 */
}

.uploaded-image:hover {
    transform: scale(1.1); /* 鼠标悬停时放大 */
}
.result-sidebar {
    width: 300px;
    background-color: #f8f9fa;
    padding: 20px;
    border-left: 1px solid #ddd;
    overflow-y: auto;
}

.purchase-button {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.purchase-button:hover {
    background-color: #0056b3;
}

.tabs {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
}

.tabs button {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    font-size: 16px;
}

.tabs button.active {
    border-bottom: 2px solid #007bff;
    color: #007bff;
    font-weight: bold;
}

.tab-content {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
