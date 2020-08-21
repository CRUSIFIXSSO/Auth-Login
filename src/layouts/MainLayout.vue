<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        
      <q-btn 
        v-if="$route.fullPath.includes('/chat')"
        v-go-back.single
        icon="arrow_back"
        flat
        dense 
        label="back" />

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  computed: {
    title() {
      console.log(this.$route)
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'GomediaTest'
      else if (currentPath == 'chat') return 'Chat'
      else if (currentPath == 'auth') return 'Login' 
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>