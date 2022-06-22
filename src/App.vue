<script setup>
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import {usePokemonStore} from '@/stores/pokemon'

  const { allPokemon } = storeToRefs( usePokemonStore() );
  const { fetchPokemon } = usePokemonStore();

  onBeforeMount(async () => {
    console.log('onBeforeMount')
    await fetchPokemon()
    console.log(allPokemon.value)
  })
</script>

<template>
  <main>
  <RouterView/>
  </main>
</template>

<style>

</style>
