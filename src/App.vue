<template>
  <div class="nav">
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/blog">blog</router-link></li>
      <li><router-link to="/projects">projects</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<style scoped>
  .nav {
    padding-top: 16px;
    margin-bottom: 36px;
  }
  
  .nav ul {
    display: flex;
    flex-direction: row;
    width: calc(var(--body-width) / 3);
  
    justify-content: space-between;
    padding: 0;
  }
  
  .nav li {
    list-style: none;
  }
</style>
