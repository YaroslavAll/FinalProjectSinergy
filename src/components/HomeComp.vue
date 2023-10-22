<template>
    <div>
        <div class="Welcome">

            <div>
                <h3 class="text">Добро пожаловать на мой сайт</h3>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'HomeComp',
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat:wght@100&family=Roboto:wght@500&display=swap');

p{
    margin: 0;
    text-align: center;
}

  /* Welcome */

.div{
    width: 700px;
}

.text{
   margin: 0;
   text-align: center;
   width: 1000px;
   margin-left: auto;
   margin-right: auto;
   color: white;
   font-size: 100px;
    font-family: 'Montserrat', sans-serif;
    /* font-family: 'Roboto', sans-serif; */

}
.Welcome{
    padding-top: 200px;
    padding-bottom: 290px;
    width: 100%;
    height: 374px;
    background-color: rgba(0, 0, 0, 0.25);
    background-blend-mode: multiply;
    background-image: url(D:\Новая папка\LMS\FinalProject\final\src\assets\2023-10-21_08-00-45.png);
}


  </style>
  