
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexUsers.vue') },
      { path: '/chat', component: () => import('pages/IndexChat.vue') },
      { path: '/auth', component: () => import('pages/IndexAuth.vue') }
    ]
  }
]

  // Always leave this as last one,
  if (process.env.MODE !== 'ssr') {
    routes.push({
      path: '*',
    component: () => import('pages/Error404.vue')
    })
  }

export default routes
