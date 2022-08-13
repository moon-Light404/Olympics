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
import itemOne1page from '@/views/itemOne1page'
import itemOne2page from '@/views/itemOne2page'
import itemOne3page from '@/views/itemOne3page'
import itemOne4page from '@/views/itemOne4page'
import itemOne5page from '@/views/itemOne5page'
import itemTwo1page from '@/views/itemTwo1page'
import itemTwo2page from '@/views/itemTwo2page'
import itemTwo3page from '@/views/itemTwo3page'
import itemTwo4page from '@/views/itemTwo4page'
import itemTwo5page from '@/views/itemTwo5page'
import itemTwo6page from '@/views/itemTwo6page'
import itemTwo7page from '@/views/itemTwo7page'
import itemTwo8page from '@/views/itemTwo8page'
import itemTwo9page from '@/views/itemTwo9page'
import itemThree1page from '@/views/itemThree1page'
import itemThree2page from '@/views/itemThree2page'
import itemThree3page from '@/views/itemThree3page'
import itemThree4page from '@/views/itemThree4page'
import itemThree5page from '@/views/itemThree5page'
import itemFour1page from '@/views/itemFour1page'
import itemFour2page from '@/views/itemFour2page'
import itemFour3page from '@/views/itemFour3page'
import itemFour4page from '@/views/itemFour4page'
import itemFour5page from '@/views/itemFour5page'
import cloudpage from '@/views/cloud_page'
import project1page from '@/views/project1_page'
import project2page from '@/views/project2_page'
import project3page from '@/views/project3_page'
import project4page from '@/views/project4_page'
import project5page from '@/views/project5_page'
import project7page from '@/views/project7_page'
import project8page from '@/views/project8_page'
import project9page from '@/views/project9_page'
import project10page from '@/views/project10_page'
import project11page from '@/views/project11_page'
import project16page from '@/views/project16_page'
import project19page from '@/views/project19_page'
import project21page from '@/views/project21_page'
import project23page from '@/views/project23_page'
import project24page from '@/views/project24_page'

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
    path: '/screen3',
    component: screenpage4
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
    path: '/bilipage',
    component: biliPage
  },
  {
    path: '/allphage',
    component: allphPage
  },
  {
    path: '/mappage',
    component: mapPage
  },
  {
    path: '/echarts1page',
    component: echarts1
  },
  {
    path: '/echarts1page',
    component: echarts1
  },
  {
    path: '/echarts2page',
    component: echarts2
  },
  {
    path: '/echarts3page',
    component: echarts3
  },
  {
    path: '/echarts4page',
    component: echarts4
  },
  {
    path: '/echarts5page',
    component: echarts5
  },
  {
    path: '/echarts6page',
    component: echarts6
  },
  {
    path: '/itemOne1page',
    component: itemOne1page
  },
  {
    path: '/itemOne2page',
    component: itemOne2page
  },
  {
    path: '/itemOne3page',
    component: itemOne3page
  },
  {
    path: '/itemOne4page',
    component: itemOne4page
  },
  {
    path: '/itemOne5page',
    component: itemOne5page
  },
  {
    path: '/itemTwo1page',
    component: itemTwo1page
  },
  {
    path: '/itemTwo2page',
    component: itemTwo2page
  },
  {
    path: '/itemTwo3page',
    component: itemTwo3page
  },
  {
    path: '/itemTwo4page',
    component: itemTwo4page
  },
  {
    path: '/itemTwo5page',
    component: itemTwo5page
  },
  {
    path: '/itemTwo6page',
    component: itemTwo6page
  },
  {
    path: '/itemTwo7page',
    component: itemTwo7page
  },
  {
    path: '/itemTwo8page',
    component: itemTwo8page
  },
  {
    path: '/itemTwo9page',
    component: itemTwo9page
  },
  {
    path: '/itemThree1page',
    component: itemThree1page
  },
  {
    path: '/itemThree2page',
    component: itemThree2page
  },
  {
    path: '/itemThree3page',
    component: itemThree3page
  },
  {
    path: '/itemThree4page',
    component: itemThree4page
  },
  {
    path: '/itemThree5page',
    component: itemThree5page
  },
  {
    path: '/itemFour1page',
    component: itemFour1page
  },
  {
    path: '/itemFour2page',
    component: itemFour2page
  },
  {
    path: '/itemFour3page',
    component: itemFour3page
  },
  {
    path: '/itemFour4page',
    component: itemFour4page
  },
  {
    path: '/itemFour5page',
    component: itemFour5page
  },
  {
    path: '/cloudpage',
    component: cloudpage
  },
  {
    path: '/project1page',
    component: project1page
  },
  {
    path: '/project2page',
    component: project2page
  },
  {
    path: '/project3page',
    component: project3page
  },
  {
    path: '/project4page',
    component: project4page
  },
  {
    path: '/project5page',
    component: project5page
  },
  {
    path: '/project7page',
    component: project7page
  },
  {
    path: '/project8page',
    component: project8page
  },
  {
    path: '/project9page',
    component: project9page
  },
  {
    path: '/project10page',
    component: project10page
  },
  {
    path: '/project11page',
    component: project11page
  },
  {
    path: '/project16page',
    component: project16page
  },
  {
    path: '/project19page',
    component: project19page
  },
  {
    path: '/project21page',
    component: project21page
  },
  {
    path: '/project23page',
    component: project23page
  },
  {
    path: '/project24page',
    component: project24page
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
