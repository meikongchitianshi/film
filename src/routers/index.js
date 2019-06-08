import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './Movie'
import CinemaRouter from './Cinema'
import MineRouter from './Mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      MovieRouter,
      CinemaRouter,
      MineRouter,
      {
          path:'/',
          redirect:'/movie/nowPlaying'
      }
  ]
})
