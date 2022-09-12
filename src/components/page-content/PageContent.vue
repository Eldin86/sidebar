<template>
  <div class="content">
    <router-view />
  </div>
</template>

<style scoped>
.content {
  position: relative;
  background: #f2f5f7;
  min-height: 100vh;
  left: 64px;
  width: calc(100% - 64px);
  padding: 40px 0 0 40px;
}
</style>
