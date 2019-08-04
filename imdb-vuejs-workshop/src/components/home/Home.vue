<template>
    <div class="home">
      <!-- <h1>Welcome to the Page!</h1>
          <p>Please  <a href="/login">login</a> at the System</p>
          <p>or  <a href="/register">register</a> if you haven't</p> -->
      <h1>All movies</h1>
      <ul class="movies">
        <li class="movie" v-for="movie in movies" :key="movie._id"> 
          <h2>{{movie.title}}</h2>
          <img
            :src="movie.poster" />
          <span>
            <button>Show Details</button>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
import {movieService} from '@/services/movieServices'

export default {

  mixins: [movieService]
}
</script>

<style  scoped>

/* Home CSS  */
.home {
  text-align: center;
}

.home ul.movies {
  display: flex;
  margin: 0 auto;
  width: 50%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.home li.movie {
  display: grid;
}

.home img {
  margin: 0 auto;
}

button {
  width: 60%;
  margin: 0 auto;
  border: 2px solid dodgerblue;
  text-align: center;
  font-size: 14px;
  background: dodgerblue;
  color: white;
  border-radius: 7px;
  margin-top: 20px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
}

button:hover {
  color: dodgerblue;
  background: transparent;
}
</style>
