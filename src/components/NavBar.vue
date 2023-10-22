<template>
    <div class="navbar">
        <div class="head">
            <p class="HeadP">Навигация</p>
        </div>

        <div class="NavBar">
            <div class="Nav">
                <router-link to="/" class="router-link">Home</router-link>
                <router-link to="/chat" class="router-link">Chat</router-link>
                <router-link to="/register" class="router-link">Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeComp',
}
</script>

<style>
.head{
    margin: 0;
    height: 35px;
    background-color: black;
    color: white;
    position: fixed;
    width: 100%;
}
.HeadP{
    text-align: center;
    line-height: 35px;
    margin: 0;
    /* color: yellow; */
    font-size: 24px;
    background-image:linear-gradient(110deg,
        black, 
        #282828,
        #282828,
        black
    );
}

  /* NavBar */



.Nav{
    height: 20px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}

.NavBar{
    color: white;
    background-image:linear-gradient(100deg,
        black, 
        #282828,
        #282828,
        black
    );
    position: fixed;
    width: 100%;
    margin-top: 35px;
}



</style>