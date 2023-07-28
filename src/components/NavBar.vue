<script setup>

import {ref} from "vue";
import {useMovieStore} from "../stores/MovieStore.js";

const movieStore = useMovieStore()

const searchMovie = ref('')
</script>

<template>
    <nav class="bg-red-400 text-white py-24 flex justify-center flex-col items-center relative">
      <h1 class="font-extrabold text-4xl">Movie Search</h1>

      <form class="absolute top-48 mt-2">
        <input v-model="searchMovie" @input="movieStore.fetchMovies(searchMovie)" type="text" class="rounded outline-none text-black px-10 py-5 md:w-[30rem]" placeholder="Enter a movie name" />

      </form>
    </nav>
</template>