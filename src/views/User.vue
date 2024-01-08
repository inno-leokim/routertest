<template>
    <div>
        User {{ userinfo }} {{ newsletterPopup }}
    </div>
    <button @click="goProfile">Go Profile</button>
    <router-view></router-view>
</template>

<script>
    export default {
        props: {
            newsletterPopup: {type: Boolean, default: true}
        },
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
                // 프로그래밍 방식으로 페이지 이동. 
                // <router-link>가 선언방식(정적방식)이라면 $route.push는 동적으로 페이지를 이동
                    
                // router.replace 역시 push와 같은 역할을 한다. 차이점은 replace는 history를 쌓지 않는다. 
            },
            goProfile(){
                this.$router.push({name: 'Profile', params: {username: 'brand15'}, query: {id: 15}});
            }
        },
        
        watch: {
            $route(to, prev){
                console.log(to);
                console.log('to: ' + to.path);
                console.log('to: ' + to.query);
                console.log('prev: ' + prev.path);
                console.log('prev: ' + prev.query);
            }         
        }
    }
</script>

<style scoped>

</style>
