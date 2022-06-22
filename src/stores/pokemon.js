import { defineStore } from 'pinia'
import { allPokemon }  from '@/fetch/pokeapi'
export const usePokemonStore = defineStore({
    id:'pokemon',
    state: () => ({
        loading:true,
        isFetchPokemon:false,
        allPokemon:null,
    }),
    actions: {
        async fetchPokemon() {
            if(!this.isFetchPokemon){
                console.log('init fetchPokemon');
                const data = await allPokemon()
                this.allPokemon = data.results
                this.isFetchPokemon=true;
            }
        }
    }
})