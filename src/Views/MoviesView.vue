<script setup>

import {storeToRefs} from "pinia";
import {useMovieStore} from "../stores/MovieStore.js";
import MoviesList from '../components/MoviesList.vue'
import NavBar from "../components/NavBar.vue";

const movieStore = useMovieStore()
const {movies} = storeToRefs(movieStore)

movieStore.fetchMovies()
</script>


<template>
  <NavBar />

  <div class="flex py-32 gap-10 flex-wrap justify-center">
    <MoviesList
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
    />

    <div v-if="movies.length === 0">
      Not found
    </div>
  </div>
</template>