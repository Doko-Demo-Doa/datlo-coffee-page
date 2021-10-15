<template>
  <div class="main-layout">
    <Headline />
    <Menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Headline from "../headline/headline.vue";
import Menu from "../menu/menu.vue";

export default defineComponent({
  components: {
    Headline,
    Menu,
  },
});
</script>
