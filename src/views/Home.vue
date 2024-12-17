<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <header>
        <h1>欢迎来到YZ科技公司</h1>
        <p>我们致力于提供最优质的科技解决方案，助您实现业务增长与创新。</p>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 5px;
  }
  
  .home header h1 {
    margin-bottom: 10px;
  }
  
  .home header p {
    font-size: 1.1em;
    color: #555;
  }
  </style>