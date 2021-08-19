<template>
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    class="el-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <!-- 导航 首页 -->
    <el-menu-item index="/test">
      <i class="el-icon-menu"></i>
      <span>首 页</span>
    </el-menu-item>
    <!-- 导航 内容管理 -->
    <el-submenu index="2">
      <template v-slot:title>
        <i class="el-icon-location"></i>
        <span>内容管理</span>
      </template>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>子导航一</span>
      </el-menu-item>
      <el-menu-item index="2-2">
        <i class="el-icon-menu"></i>
        <span>子导航二</span>
      </el-menu-item>
      <el-menu-item index="2-3">
        <i class="el-icon-menu"></i>
        <span>子导航三</span>
      </el-menu-item>
      <el-menu-item index="2-4">
        <i class="el-icon-menu"></i>
        <span >子导航四</span>
      </el-menu-item>
    </el-submenu>
    <!-- 导航 用户 -->
    <el-submenu index="3">
      <template v-slot:title>
        <i class="el-icon-location"></i>
        <span>用户</span>
      </template>
      <el-menu-item index="3-1">
        <i class="el-icon-menu"></i>
        <span>子导航一</span>
      </el-menu-item>
      <el-menu-item index="3-2">
        <i class="el-icon-menu"></i>
        <span>子导航二</span>
      </el-menu-item>
      <el-menu-item index="3-3">
        <i class="el-icon-menu"></i>
        <span>子导航三</span>
      </el-menu-item>
      <el-menu-item index="3-4">
        <i class="el-icon-menu"></i>
        <span>子导航四</span>
      </el-menu-item>
    </el-submenu>
    <!-- 导航 设置 -->
    <el-submenu index="4">
      <template v-slot:title>
        <i class="el-icon-location"></i>
        <span>设置</span>
      </template>
      <el-menu-item index="4-1">
        <i class="el-icon-menu"></i>
        <span>子导航一</span>
      </el-menu-item>
      <el-menu-item index="4-2">
        <i class="el-icon-menu"></i>
        <span>子导航二</span>
      </el-menu-item>
      <el-menu-item index="4-3">
        <i class="el-icon-menu"></i>
        <span>子导航三</span>
      </el-menu-item>
      <el-menu-item index="4-4">
        <i class="el-icon-menu"></i>
        <span>子导航四</span>
      </el-menu-item>
    </el-submenu>
    <!-- 导航  运营 -->
    <el-submenu index="5">
      <template v-slot:title>
        <i class="el-icon-location"></i>
        <span>运营</span>
      </template>
      <el-menu-item index="5-1">
        <i class="el-icon-menu"></i>
        <span>子导航一</span>
      </el-menu-item>
      <el-menu-item index="5-2">
        <i class="el-icon-menu"></i>
        <span>子导航二</span>
      </el-menu-item>
      <el-menu-item index="5-3">
        <i class="el-icon-menu"></i>
        <span>子导航三</span>
      </el-menu-item>
      <el-menu-item index="5-4">
        <i class="el-icon-menu"></i>
        <span>子导航四</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.el-menu{
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;/*溢出纵向上滚动效果*/
}
.el-menu::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0;
}
.el-menu:not(.el-menu--collapse) {
  /*侧边栏隐藏显示效果*/
  width: 250px;
}
</style>
