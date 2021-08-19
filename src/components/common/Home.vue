<template>
  <div class="wrapper">
    <Header></Header>
    <side-bar></side-bar>
    <Breadcrumb></Breadcrumb>
    <Main></Main>
  </div>
</template>

<script>
import SideBar from './SideBar'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Main from './Main'
export default {
  name: 'Home',
  components: {
    SideBar,
    Header,
    Breadcrumb,
    Main
  }
}
</script>
<style scoped>

.wrapper{
  overflow: hidden;
}
</style>
