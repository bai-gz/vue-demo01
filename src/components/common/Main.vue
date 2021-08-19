<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
  }
}
</script>

<style scoped>
.content{
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  position: absolute;
  left: 250px;
  top: 85px;
  bottom: 0;
  right: 0;
}

</style>
