<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/" exact-active-class="active">主页</router-link>
        </li>
        <li>
          <router-link to="/services" exact-active-class="active">主要业务</router-link>
        </li>
        <li>
          <router-link to="/support" exact-active-class="active">用户支持</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 10px 0;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  
  .navbar ul li {
    margin: 0 15px;
  }
  
  .navbar ul li a {
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    display: block;
  }
  
  .navbar ul li a:hover,
  .navbar ul li a.active {
    background-color: #575757;
    border-radius: 4px;
  }
  </style>