<!-- src/views/Support.vue -->
<template>
    <div class="support">
      <section>
        <h2>用户支持</h2>
        <p>如果您在使用我们的产品或服务时遇到任何问题，请随时联系我们的支持团队。</p>
        <form @submit.prevent="handleSubmit">
          <label for="name">姓名:</label>
          <input type="text" id="name" v-model="form.name" required />
  
          <label for="email">邮箱:</label>
          <input type="email" id="email" v-model="form.email" required />
  
          <label for="message">留言:</label>
          <textarea id="message" v-model="form.message" required></textarea>
  
          <button type="submit">提交</button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Support',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // 在这里处理表单提交逻辑，例如发送到后端
        alert('感谢您的留言，我们会尽快回复您！')
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      }
    }
  }
  </script>
  
  <style scoped>
  .support {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 5px;
  }
  
  .support section h2 {
    margin-bottom: 10px;
  }
  
  .support section p {
    margin-bottom: 20px;
    color: #555;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  form label {
    margin-top: 10px;
  }
  
  form input,
  form textarea {
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  form button {
    margin-top: 15px;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  form button:hover {
    background-color: #575757;
  }
  </style>