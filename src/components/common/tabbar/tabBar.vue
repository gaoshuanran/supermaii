<template>
  <div class="tab-bar">
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
.tab-bar {
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* box-shadow:;  阴影*/
}

</style>
