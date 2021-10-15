<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent, ref } from "vue";
import Layout from "./components/_layout/layout.vue";

export default defineComponent({
  components: { Layout },
});
</script>

<template>
  <Layout />
</template>

<style>
#app {
  font-family: "Source Serif Pro", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
