<template>
<div class="tab-bar-item" @click="itemClick">
    <!-- 使用插槽 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
    <!-- 所有item展示相同的图片，同样的文字 -->
    <!-- <img src="../../assets/img/tabbar/home.png" alt="">
    <div>首页</div> -->
</div>
</template>
<script>
export default {
    props:{
        path:String,
        // 属性
        activeColor: {
            // 类型是字符串
            type: String,
            // 默认是蓝色 可以修改颜色activeColor="red"
            default: 'rgb(27, 154, 220)'
            
        }

    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
        // 动态决定路由
        isActive(){
            return this.$route.path.indexOf(this.path) !==-1
        },

        // 动态决定颜色
        activeStyle(){
            // 返回this.isActive是否处于活跃状态，如果处于活跃状态就给color:this.activeColor, 如果不是活跃状态就给空
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods:{
       itemClick(){
           this.$router.push(this.path)
           console.log(this);

       } 
    }
};
</script>
<style >
.tab-bar-item {
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}


</style>