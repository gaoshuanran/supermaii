<template>
  <div>
    <!-- 使用组件 -->
    <tabBar>
      <tabBarItem path="/home" >
        <!-- 使用具名插槽 -->
        <img slot="item-icon" src="@/assets/img/common/tabbar/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/common/tabbar/home-active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path="/category">
        <img slot="item-icon" src="@/assets/img/common/tabbar/category.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/common/tabbar/category-active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabBarItem>
      <tabBarItem path="/shopcar">
        <img
          slot="item-icon"
          src="@/assets/img/common/tabbar/shoppingcart.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="@/assets/img/common/tabbar/shoppingcart-active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile">
        <img slot="item-icon" src="@/assets/img/common/tabbar/mine.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/common/tabbar/mine-active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabBarItem>
    </tabBar>
  </div>
</template>
<script>
// 导入组件
import tabBar from "@/components/common/tabbar/tabBar";
import tabBarItem from "@/components/common/tabbar/tabBarItem";
export default {
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>
<style scoped>
</style>