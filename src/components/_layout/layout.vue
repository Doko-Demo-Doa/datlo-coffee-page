<template>
  <div class="main-layout">
    <Headline />
    <Menu />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Headline from "../headline/headline.vue";
import Menu from "../menu/menu.vue";
import Footer from "../footer/footer.vue";

export default defineComponent({
  components: {
    Headline,
    Menu,
    Footer,
  },
});
</script>
