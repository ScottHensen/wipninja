<template>
  <div class="dashboard">
    <h3>dashboard</h3>
    <router-view></router-view>
    {{$store.state}}
  </div>
</template>
