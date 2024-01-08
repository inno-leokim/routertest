<template>
    <div>
        User 
    </div>
</template>

<script>
    export default {
        computed: {
            userinfo(){
                return `${this.$route.params.username}, ${this.$route.query.id}`
            }
        },
        methods: {
            goBack(num){
                window.history.length > num
                ? this.$route.go(-1)
                : this.$route.push('/')
            }
        }
    }
</script>

<style scoped>

</style>
