<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar></MainTabbar>
  </div>
</template>
<script >
import MainTabbar from '@/components/content/mainTabbar/MainTabbar'
export default {
  components:{
    MainTabbar
  }
}
</script>

<style>


</style>
