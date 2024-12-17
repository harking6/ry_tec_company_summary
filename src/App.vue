<!-- src/App.vue -->
<template>
    <div id="app">
      <Navbar />
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue'
  
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
  </script>
  
  <style>
  /* 全局样式 */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
  }
  </style>