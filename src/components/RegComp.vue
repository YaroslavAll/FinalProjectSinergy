<template>
    
    <div class="RegComp">
        <div v-if="isAuthenticated">
            <h1>Добро пожаловать, <b>{{ username }}</b></h1>
            <button @click="logout" class="button1">Выход из системы</button>
        </div>

        <div v-else-if="isAuthenticated == false" class="reg">
            <label>Ваше имя:</label>
            <input v-model="username" @keyup.enter="login"/>
            <button @click="login" class="button2">подтвердить</button>
        </div>
    </div>  
     
</template>

<script>
export default{
    name: 'RegComp',
    data(){
        return{
            isAuthenticated: false,
            username: ''
        }
    },
    methods: {
        login(){
            if(this.username !== ''){
                console.log('You entered as', this.username)
                this.isAuthenticated = true
                localStorage.setItem('isAuthenticated', true)
                localStorage.setItem('username', this.username)
                this.$router.push({
                    name: 'Chat',
                    query: {username: this.username}
                })
            }else{
                console.log('Пожалуйста введите своё имя')
            }
        },
        logout(){
            this.isAuthenticated = false
            this.username = ''
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('username')
        }
    },
    created(){
        if(localStorage.getItem('isAuthenticated')){
            this.isAuthenticated = true
            this.username = localStorage.getItem('username')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat:wght@100&family=Roboto:wght@500&display=swap');

div{
    padding: 20px;
    font-size: 25px;
}

.reg{
    /* vertical-align: middle; */
    line-height: 120px;
    display: block;
}

.button1{
    height: 70px;
    width: 300px;
    margin-right: 10px;
    margin-left: 10px;
    color: white;
    background-color: black;
    margin-top: 15px;
    border-width: 0px;
    border-radius: 30px;
    font-size: 25px;
    cursor: pointer;
}

.button2{
    height: 40px;
    width: 150px;
    margin-right: 10px;
    margin-left: 10px;
    color: white;
    background-color: black;
    border-width: 0px;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    padding-bottom: 5px;
}

input{
    background-color: black;
    color: white;
    border: 1px solid #ffffff;
    border-radius: 10px;
    height: 25px;
    padding: 0;
    padding-top: 5px;
    margin-left: 10px;
}

.RegComp{
    height: 789px;
    /* background-color: rgb(50, 50, 50); */
    background-image: url(D:\Новая папка\LMS\FinalProject\final\src\assets\2023-10-21_08-00-45.png);
    color: white;
    padding-top: 55px;
    font-family: 'Montserrat', sans-serif;
    background-color: rgba(0, 0, 0, 0.25);
    background-blend-mode: multiply;
}

h1{
    margin-top: 200px;
    color: yellow;
    background-color: black;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    border-radius: 50px;
    border: #ffffff 9px solid;
}

b{
    color: white;
}

</style>
