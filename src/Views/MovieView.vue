<script setup>

import {defineProps} from "vue";
import {storeToRefs} from "pinia";
import {useMovieStore} from "../stores/MovieStore.js";
import Ratings from "../components/Ratings.vue";
import IconBack from "../components/icons/IconBack.vue";
import IconStar from "../components/icons/IconStar.vue";

const movieStore = useMovieStore()
const {movie} = storeToRefs(movieStore)

const props = defineProps({
  id: String,
})

movieStore.fetchMovie(props.id)

</script>

<template>
  <div class="bg-red-400 text-white py-20 px-10 lg:px-40 flex justify-between flex flex-col lg:flex-row gap-10 lg:w-[100%]">
    <div>
      <div class="flex items-center">
        <router-link to="/movies">
          <IconBack class="w-7 h-7 md:w-10 md:h-10 mr-5" />
        </router-link>
        <h1 class="font-extrabold text-2xl">{{movie.Title}}</h1>

        <div class="ml-7 flex items-center gap-1">
          <IconStar class="w-7 h-7 md:w-10 md:h-10"/>
          <span class="rounded py-1 text-white">{{movie.imdbRating}}/10</span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-10 gap-3">
        <Ratings
            v-for="rating in movie.Ratings"
            :key="rating.Source"
            :rating="rating" />
      </div>

      <div class="w-[100%] lg:w-[70%] mt-10">
        <h2 class="font-bold text-xl mb-3">Year: {{movie.Year}}</h2>
        <p class="mb-3">{{movie.Plot}}</p>

        <span class="bg-white rounded px-3 py-1 text-red-400">{{movie.Language}}</span>
      </div>
    </div>

    <img :src="movie.Poster" class="lg:-mb-96 md:h-[30rem] w-[20rem] rounded-md" alt="movie poster" />
  </div>

  <div class="px-10 lg:px-40 py-10">
    <div class="mb-5">
      <h2 class="text-xl font-extrabold">Awards</h2>
      <p>{{movie.Awards}}</p>
    </div>

    <div class="">
      <h2 class="text-xl font-extrabold">Actors</h2>
      <p class="">{{movie.Actors}}</p>
    </div>
  </div>
</template>