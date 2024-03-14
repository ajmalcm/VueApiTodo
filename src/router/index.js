/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
// import Todo from "../pages/Todo.vue";

// const routes=[
//   {
//   path:"/todo",
//   component:Todo
// }
// ]

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: setupLayouts,
  // routes
  
})

export default router
