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
    path: '/examine',
    name: 'Examine',
    component: () => import('@/views/Examine/index')
  },

  {
    path: '/notice',
    name: 'Notice',
    component: () => import('@/views/Notice/index')
  },

  {
    path: '/writeBlog',
    name: 'WriteBlog',
    component: () => import('@/views/WriteBlog/index')
  },

  {
    path: '/readBlog/:id',
    name: 'ReadBlog',
    component: () => import('@/views/ReadBlog/index')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
