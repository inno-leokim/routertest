<template>
  <div>
    <h1>Hello</h1>
    <div><router-link to="/">Home</router-link></div>    
    <div><router-link to="/about">About</router-link></div>  
    <div><router-link to="login">Login</router-link></div>  
    <div><router-link :to="{name: 'User', params: {username: 'brand13'}, query: {id: 13}}">User-Brand13</router-link></div>
    <div><router-link :to="{name: 'Profile', params: {username: 'brand14'}, query: {id: 14}}">User-Profile</router-link></div>
  </div>
  <!-- 해당 URL에 mapping되는 뷰(컴포넌트)가 렌더링 된다.-->
  <!-- chilidren을 선언했을 경우 children의 컴포넌트(.vue 파일)가 렌더링 된다. -->
  
    <router-view class="view two"></router-view> <!-- router-view가 여러개일 때 따로 name이 없을 경우 default라는 이름이 지정된다.-->
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
</template>

<script>

</script>

<style>

</style>
