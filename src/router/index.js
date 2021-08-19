import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/test',
    component: () => import('../components/content/Test')
  }]
// 在router4中使用createRouter替代了new VueRouter;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  // 在此处引入所有页面的路由配置数组routes;
})
export default router
