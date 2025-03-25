<script setup lang="ts">
  const year = new Date().getFullYear()
</script>
<template>
  <footer>
    <p>&copy; {{ year }} 哇哇工作站</p>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    width: 100%;
    height: 2rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fff;
  }
</style>
