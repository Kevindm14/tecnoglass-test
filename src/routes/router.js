import {createRouter, createWebHistory} from "vue-router";
import MoviesView from "../Views/MoviesView.vue";
import MovieView from "../Views/MovieView.vue";

const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Movies',
            component: MoviesView
        },
        {
            path: '/movies',
            name: 'MoviesList',
            component: MoviesView
        },
        {
            path: '/movies/:id',
            name: 'MovieView',
            component: MovieView,
            props: true
        }
    ]
})

export default routes