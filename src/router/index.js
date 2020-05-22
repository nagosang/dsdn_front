import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index'),
  },

  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog/index'),
  },

  {
    path: '/download',
    name: 'Download',
    component: () => import('@/views/Download/index')
  },

  {
    path: '/writeBlog',
    name: 'WriteBlog',
    component: () => import('@/views/WriteBlog/index')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
