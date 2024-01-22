<template>
    <div class="post">
        <div>
            <h3>About Page</h3>
        </div>
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div class="error" v-if="error">
            {{ error }}
        </div>

        <div v-if="post" class="content">
            <h3></h3>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                loading: false,
                post: null,
                error: null
            }
        }, 
        methods: {
            getPosts: function (){
                this.loading = true;
                // fetch('https://jsonplaceholder.typicode.com/posts')
                // .then(response => response.json())
                // .then((data) => {
                //     this.loading = false;
                //     this.post = data;
                // }).catch(err => {
                //     this.loading = false;
                //     // console.log(err);
                //     this.error = err.toString();
                // })
            }
        },
        created(){ //컴포넌트를 탐색(마운트)한 후에 가져오기
            // this.getPosts();
        },
        beforeRouteEnter(to, from, next){ //컴포넌트 탐색(마운트) 전에 가져오기. this에 접근할 수 없다. 따라서 state 값에 접근 불가.
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then((data) => {
                    console.log('before Route Enter');
                    console.log(data);
                    // this.post = data;  // => undefined 에러 발생
                    next(alert('success'));
                }).catch(err => {
                    console.log(err.toString());
                })

        }  
    }
</script>

<style scoped>

</style>