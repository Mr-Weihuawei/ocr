<template>
    <div class="advantages-container">
      <h2>模型优势</h2>
      <div class="advantages-grid">
        <!-- 优势 1 -->
        <div class="advantage-item">
          <img src="@/assets/u75.png" alt="效果显著" />
          <h3>效果显著</h3>
          <p>大模型在行业场景快速实践，识别能力显著提高并于传统模型。</p>
        </div>
        <!-- 优势 2 -->
        <div class="advantage-item">
          <img src="@/assets/u77.png" alt="学习进步" />
          <h3>学习进步</h3>
          <p>大模型理解语义能力强化，转化进步，助力各种识别场景。</p>
        </div>
        <!-- 优势 3 -->
        <div class="advantage-item">
          <img src="@/assets/u76.png" alt="灵活定制" />
          <h3>灵活定制</h3>
          <p>灵活调整模型，定制大模型更多的应用场景。</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdvantagesSection",
  };
  </script>
  
  <style scoped>
  .advantages-container {
    text-align: center;
    padding: 40px 20px;
  }
  
  .advantages-container h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .advantages-grid {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
  
  .advantage-item {
    flex: 1;
    max-width: 300px;
    text-align: center;
  }
  
  .advantage-item img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
  
  .advantage-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .advantage-item p {
    font-size: 14px;
    color: #555;
  }
  </style>
  