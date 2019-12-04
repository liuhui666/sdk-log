import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import SDK from '../views/SDK.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'sdk',
    component: SDK,
  },
  {
    path: '/sdk',
    name: 'sdk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SDK,
  },
  {
    path: '/changelog',
    name: 'changelog',

    component: () => import('../views/Changelog.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
