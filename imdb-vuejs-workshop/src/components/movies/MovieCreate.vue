<template>
    <div class="create">
      <h1>Create Movie</h1>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" placeholder="Titanic" />
        <label for="storyline">Story Line</label>
        <input type="text" id="storyline" placeholder="Text" />
        <label for="url">Trailer Url</label>
        <input type="text" id="url" placeholder="https://www.youtube.com/watch?v=DNyKDI9pn0Q" />
        <label for="poster">Movie Poster</label>
        <input type="text" id="poster"
          placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzg6o0KjhufKFU1iBNr1zuyi0YDNgCUw4Ky5SNATZDVKaIUkiAA" />

        <input type="submit" value="Create" />
      </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

/* Create CSS */
.create form {
  display: grid;
  width: 25%;
  margin: 0 auto;
}

.create input {
  padding: 10px;
  margin-bottom: 20px;
}

.create input[type="submit"] {
  width: 25%;
  margin: 0 auto;
  border: 2px solid dodgerblue;
  text-align: center;
  font-size: 14px;
  background: dodgerblue;
  color: white;
  border-radius: 7px;
  margin-top: 20px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
}

.create input[type="submit"]:hover {
  color: dodgerblue;
  background: transparent;
}
</style>
