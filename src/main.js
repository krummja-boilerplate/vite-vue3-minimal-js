import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import Projects from '@/views/Projects.vue';
import App from './App.vue';

// Import main CSS file to automatically inject into index.html style block.
import './assets/main.css';

const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home,
  },
  { 
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  { 
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
