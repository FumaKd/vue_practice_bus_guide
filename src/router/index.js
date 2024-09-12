import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TableView from '@/views/TableView.vue'
import TableListView from '@/views/TableListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/tables',
    name: 'tables',
    component: TableListView,
  },
  {
    path: '/tables/:timeTableId',
    name: 'tablesDetail',
    component: TableView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
