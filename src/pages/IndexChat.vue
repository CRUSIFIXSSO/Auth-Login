<template>
  <q-page class="flex colum">
    <div class="q-pa-md column col">
      
    </div>
     <q-footer elevated>
        <q-toolbar>
          <q-input
           v-model="newMessage"
           bg-color="white"
           class="full-width"
           outlined
           rounded
           label="Message" 
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
  data(){
    return{
      newMessage: ''
    }
  }
}
</script>

<style>
</style>