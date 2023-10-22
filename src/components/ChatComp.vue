<template>
    <div class="body">
        <div v-if="username" class="Chat">
            <div class="chat">

                <h1 class="texth1">Чат</h1>

                <div class="text" v-for="message in messages" :key="message.id">
                    {{ message.user }}: &nbsp; &nbsp;{{ message.text }}
                </div>

                <div v-show="emptyMsg" class="empty">Нет сообщений</div>

            </div>

            <input v-model="newMessage" placeholder="Ваше сообщение:"><br/>
            <button @click="sendMessage" @keyup.enter='sendMessage'>Отправить</button>
            <button v-show="deleteBtn" @click="delMessage">Удалить</button>

        </div>

        <div v-else class="alert">
            <div class="alertText">
                <h1>Для доступа к чату авторизируйтесь по ссылке: <router-link :to="{ name: 'Register'}" class="router-link">link</router-link></h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatComp',
    data(){
        return{
            messages: [],
            newMessage: '',
            emptyMsg: true,
            deleteBtn: false,
            username: localStorage.getItem('username')
        }
    },
    computed(){
        localStorage.setItem('username', this.$route.query.username)
    },
    methods: {
        sendMessage(){
            if(!this.username){
                this.username = 'Anonim'
            }
            if(this.newMessage !== ''){
                this.emptyMsg = false
                console.log('Ваше введённое сообщение:', this.newMessage)
                this.messages.push(
                    {
                        id: new Date().getTime(),
                        text: this.newMessage,
                        user: this.username
                    }
                )
                this.saveChatRecords()
                this.newMessage = ''
                this.deleteBtn = true
            }else{
                console.log('Пожалуйста введите сообщение')
                alert('Пожалуйста введите сообщение')
            } 
        },
        delMessage(){
            this.messages = []
            localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.message))
            console.log('Все сообшения удалены')
            this.emptyMsg = true
        },
        saveChatRecords(){
            const records = this.messages
            console.log(records)
            localStorage.setItem(`messages_${this.username}`, JSON.stringify(records))
        },
        loadChatRecords(){
            const records = JSON.parse(localStorage.getItem(`messages_${this.username}`))
            if(records){
                this.messages = records
                this.emptyMsg = false
            } 
        }
    },
    created(){
        this.loadChatRecords()
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat:wght@100&family=Roboto:wght@500&display=swap');
.empty{
    margin-bottom: 15px;
    padding-bottom: 200px;
}

p{
    margin: 0;
}

.texth1{
    margin-bottom: 20px;
    margin-top: 55px;
}

.text{
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
}

h2{
    margin: 0;
}

button{
    height: 30px;
    width: 150px;
    margin-right: 10px;
    color: white;
    background-color: black;
    margin-top: 15px;
    border-width: 0px;
    border-radius: 10px;
    cursor: pointer;
}

input{
    margin-top: 10px;
    background-color: black;
    color: white;
    border: 1px solid #ffffff;
    border-radius: 10px;
    height: 25px;
}

/* Chat */


.Chat{
    padding-top: 105px;
    padding-bottom: 50px;
    /* background-color: rgb(50, 50, 50); */
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    background-image: url(D:\Новая папка\LMS\FinalProject\final\src\assets\2023-10-21_08-00-45.png);
    margin: 0;
    color: white;
    height: 709px;
    background-color: rgba(0, 0, 0, 0.25);
    background-blend-mode: multiply;
}

.chat{
    margin-right: auto;
    margin-left: auto;
    width: 300px;
    padding-top: 1px;
    background-color: black;
    padding-bottom: 2px;
    border-radius: 20px;
}

.alert{
    padding-top: 250px;
    color: yellow;
    /*https://images.ctfassets.net/3mv54pzvptwz/5VqD4g4Bty6jL56jfzGMJG/313dab2f021c7cb75e9e906dd984ebf3/21SS_Social_TS_Football_Game-on-Pack_Q1_1920x1080px_Neymar-FutureZ_078.jpg*/
    background-image: url(D:\Новая папка\LMS\FinalProject\final\src\assets\2023-10-21_08-00-45.png);
    height: 614px;  
    background-color: rgba(0, 0, 0, 0.25);
    background-blend-mode: multiply;
}

.alertText{
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    background-color: black;
    border-radius: 30px;
    padding: 10px;
}

</style>
