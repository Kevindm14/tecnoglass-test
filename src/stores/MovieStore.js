import {defineStore} from "pinia";
import {omdbApiUrl} from "../utils/constant.js";
import {ref} from "vue";

export const useMovieStore = defineStore("MovieStore", () => {
    const movies = ref([])
    const movie = ref({})

    const fetchMovies = async (query = 'superman', type = 'movie') => {
        const response = await fetch(`${omdbApiUrl}&s=${query}&type=${type}`)
        const data = await response.json()
        movies.value = data.Search
    }

    const fetchMovie = async (id) => {
        const response = await fetch(`${omdbApiUrl}&i=${id}`)
        movie.value = await response.json()
    }

    return {
        movies,
        movie,
        fetchMovies,
        fetchMovie
    }
})