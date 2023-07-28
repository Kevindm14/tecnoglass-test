<script setup>

import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import {useMovieStore} from "./stores/MovieStore.js";

const movieStore = useMovieStore()

movieStore.fetchMovies()

</script>

<template>
  <RouterView />
</template>