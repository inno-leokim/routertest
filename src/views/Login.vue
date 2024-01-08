<template>
    <div>
        <h2>Login</h2>
        <div>{{ loginId }}</div>
    </div>
</template>

<script>
    export default {
        
        computed : {
            loginId() {
                return this.$route.params.id
            }
        },
        /**
         * 라우터 가드 3가지
         */
        beforeRouteEnter(to, from, next) {
            //Login 컴포넌트가 화면에 표시되기 전에 수행될 로직.
            //Login 컴포넌트 인스턴스가 아직 생성되지 않음.
            //따라서 this로 컴포넌트에 접근할 수 없음
            console.log('beforeRouteEnter');
            if(to.matched.some(record => {
                return record.meta.authRequired;
            })){
                alert("login please - beforeRo uteEnter");
            }else{
                alert("login success - beforeRouteEnter");
                console.log("routing success : '" + to.path + "'");
                next();
            }
        },
        beforeRouteUpdate(to, from, next) {
            // 화면에 표시된 컴포넌트가 변경될 때 수행될 로직
            // 이 시점에서 컴포넌트 인스턴스는 마운트 된 상태이므로, `this`로 Login 컴포넌트를 접근할 수 있음

            // 예를들어 '/login/:id/' 파라미터가 '/login/1'과 'login/2' 사이를 탐색할 때,
            // `Userdetails` 컴포넌트 인스턴스가 유지되면 이 훅이 호출됨
            
            // !!!!!언제 호출되는지 체크할 것!!
            next();
        },
        beforeRouteLeave (to, from, next) {
            // 이 컴포넌트를 렌더링한 경로에서 떠나려고 할 때 호출됨.
            // `this`로 컴포넌트 인스턴스에 접근할 수 있음.
            console.log('beforeRouteLeave');

            // !!!!!언제 호출되는지 체크할 것!!
            next();
        }
    }
</script>

<style scoped>

</style>