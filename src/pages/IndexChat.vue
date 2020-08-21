<template>
  <q-page class="flex">
     <q-footer elevated>
        <q-toolbar>
          <q-input
           bg-color="white"
           class="full-width"
           outlined
           rounded
           v-model="text" 
           label="Label" 
           dense>
  
         <template v-slot:after>
          <q-btn 
          round 
          dense 
          flat 
          color="white"
          icon="send" />
        </template>
      </q-input>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script>
export default {
  
}
</script>

<style>
</style>