<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <b-container fluid>
      <b-row>
        <b-col cols="2" style="padding: 0;">
          <Sidebar />          
        </b-col>
        <b-col cols="10">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped></style>
