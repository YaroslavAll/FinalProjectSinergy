<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'ApiComp',
    data(){
        return{
            data: [],
        }
    },
    mounted(){
        const url = "https://free-nba.p.rapidapi.com/teams?page=0";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
                "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
            },
        };
        fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            this.data = res.away_team
            console.log(res.data)
        })
    },
}
</script>

<style scoped> 

</style>