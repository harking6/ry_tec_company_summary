<!-- src/views/Services.vue -->
<template>
    <div class="services">
      <section>
        <h2>我们的主要业务</h2>
        <ul>
          <li>软件开发</li>
          <li>云计算解决方案</li>
          <li>数据分析与人工智能</li>
          <li>技术咨询服务</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services'
  }
  </script>
  
  <style scoped>
  .services {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 5px;
  }
  
  .services section h2 {
    margin-bottom: 10px;
  }
  
  .services section ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  </style>