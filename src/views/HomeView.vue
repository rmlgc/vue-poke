<script setup>
  import { storeToRefs } from 'pinia'
  import {usePokemonStore} from '@/stores/pokemon'
  const { allPokemon } = storeToRefs( usePokemonStore() );

</script>

<template>
  <header>header</header>
  <main>
    
    <li v-for="(pokenon, index) in allPokemon" :key='index'>{{index}} {{pokenon.name}}</li>
        
  </main>
</template>
