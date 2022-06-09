import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TruckView from '../views/TruckView.vue'
import SewageView from '../views/SewageView.vue'
import RequestP from '../views/RequestP.vue'
import RequestT from '../views/RequestT.vue'
import RequestC from '../views/RequestC.vue'
import ProfileP from '../views/ProfileP.vue'
import ProfileT from '../views/ProfileT.vue'
import ProfileS from '../views/ProfileS.vue'
import selectAdd from '../views/selectAdd.vue'
import selectS from '../views/selectSewage.vue'
import selectL from '../views/SelectLoca.vue'
import selectP from '../views/selectPorter.vue'
import selectC from '../views/selectCar.vue'
import selectD from '../views/selectDriver.vue'
import HomeView2 from '../components/MainPage2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/2',
    name: 'home2',
    component: HomeView2
  },
  {
    path: '/rqcar',
    name: 'rqcar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RequestC.vue')
  },
  {
    path: '/truck',
    name: 'truck',
    component: TruckView
  },
  {
    path: '/sewage',
    name: 'sewage',
    component: SewageView
  },
  {
    path: '/requestp',
    name: 'requestp',
    component: RequestP
  },
  {
    path: '/requestc',
    name: 'requestc',
    component: RequestC
  },
  {
    path: '/requestt',
    name: 'requestt',
    component: RequestT
  },
  {
    path: '/profilep',
    name: 'profilep',
    component: ProfileP
  },
  {
    path: '/profilet',
    name: 'profilet',
    component: ProfileT
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: ProfileS
  },
  {
    path: '/selectadd',
    name: 'selectadd',
    component: selectAdd
  },
  {
    path: '/selects',
    name: 'selects',
    component: selectS
  },
  {
    path: '/selectl',
    name: 'selectl',
    component: selectL
  },
  {
    path: '/selectc',
    name: 'selectc',
    component: selectC
  },
  {
    path: '/selectd',
    name: 'selectd',
    component: selectD
  },
  {
    path: '/selectp',
    name: 'selectp',
    component: selectP
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
