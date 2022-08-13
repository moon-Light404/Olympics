import Vue from 'vue'
import VueRouter from 'vue-router'
import screenpage1 from '@/views/ScreenPage1'
import screenpage2 from '@/views/ScreenPage2'
import screenpage3 from '@/views/ScreenPage3'
import JpphPage from '@/views/JPPH_page'
import personNumpage from '@/views/personNum_page'
import manPage from '@/views/man_page'
import biliPage from '@/views/bili_page'
import allphPage from '@/views/allph_page'
import mapPage from '@/views/map_page'
import echarts1 from '@/views/echarts1_page'
import echarts2 from '@/views/echarts2_page'
import echarts3 from '@/views/echarts3_page'
import echarts4 from '@/views/echarts4_page'
import echarts5 from '@/views/echarts5_page'
import echarts6 from '@/views/echarts6_page'
import echarts7 from '@/views/echarts7_page'
import echarts8 from '@/views/echarts8_page'
import echarts9 from '@/views/echarts9_page'
import echarts10 from '@/views/echarts10_page'
import echarts11 from '@/views/echarts11_page'
import echarts12 from '@/views/echarts12_page'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/screen'
  // },
  {
    path: '/',
    component: screenpage1
  },
  {
    path: '/screen1',
    component: screenpage2
  },
  {
    path: '/screen2',
    component: screenpage3
  },
  {
    path: '/JpphPage',
    component: JpphPage
  },
  {
    path: '/personpage',
    component: personNumpage
  },
  {
    path: '/manpage',
    component: manPage
  },
  {
    path: './bilipage',
    component: biliPage
  },
  {
    path: './allphage',
    component: allphPage
  },
  {
    path: './mappage',
    component: mapPage
  },
  {
    path: './echarts1page',
    component: echarts1
  },
  {
    path: './echarts1page',
    component: echarts1
  },
  {
    path: './echarts2page',
    component: echarts2
  },
  {
    path: './echarts3page',
    component: echarts3
  },
  {
    path: './echarts4page',
    component: echarts4
  },
  {
    path: './echarts5page',
    component: echarts5
  },
  {
    path: './echarts6page',
    component: echarts6
  },
  {
    path: './echarts7page',
    component: echarts7
  },
  {
    path: './echarts8page',
    component: echarts8
  },
  {
    path: './echarts9page',
    component: echarts9
  },
  {
    path: './echarts10page',
    component: echarts10
  },
  {
    path: './echarts11page',
    component: echarts11
  },
  {
    path: './echarts12page',
    component: echarts12
  }
]

const router = new VueRouter({
  routes,
  meta: {
    requireAuth: false
  },
  mode: 'history'
})

export default router
