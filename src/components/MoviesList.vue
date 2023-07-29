<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="relative aspect-[2/3] h-[30rem] rounded-md overflow-hidden">
    <router-link
      :to="/movies/+movie.imdbID"
      class="group"
    >
      <div class="absolute z-10 text-white inset-0 flex flex-col items-center justify-center bg-neutrals-900/50 p-4 text-center opacity-0 backdrop-blur-sm transition-all duration-300 hover:opacity-100 group-focus-visible:opacity-100 gap-y-2">
        <div class="overflow-hidden">
          <h3 class="translate-y-full text-2xl font-bold transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 lg:text-4xl">
            {{movie.Title}}
          </h3>
        </div>
      </div>

      <img
          :src="movie.Poster"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover absolute inset-0 group-hover:scale-105 group-focus-visible:scale-105 transition-transform duration-700"
          alt="project"
      />
    </router-link>
  </div>
</template>
