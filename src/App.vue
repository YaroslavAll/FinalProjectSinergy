<template>
  <div>
    <NavBar/>
    <ApiComp/>
    <router-view/>
    <link rel="shortcut icon" type="icon.png" sizes="16x16" href="https://avatars.mds.yandex.net/i?id=69b038330e7aa8e908974ba1e15bd7f27e243db6-10811833-images-thumbs&n=13">
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ApiComp from './components/ApiComp.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ApiComp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Roboto:wght@500&display=swap');

#app {
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;  
  font-family: 'Comfortaa', sans-serif;
  font-weight:bold;
}

body {
    margin: 0px;
}

.router-link{
    color: white;
    text-decoration: none;
}
</style>
