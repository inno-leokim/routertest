<template>
  <div>
    <h1>Hello</h1>
    <div><router-link to="/">Home</router-link></div>    
    <div><router-link to="/about">About</router-link></div>    
    <div><router-link :to="{path:`/user/brand13?id=13`}">User</router-link></div>
  </div>
  <router-view></router-view>
</template>

<script>
</script>

<style>

</style>
