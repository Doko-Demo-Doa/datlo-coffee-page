<template>
  <div class="menu pt-10">
    <div class="menu-head m-auto flex justify-center items-center">
      <h1>Menu</h1>
    </div>

    <div class="h-12" />

    <div
      class="
        sheets
        px-10
        w-100
        grid grid-cols-1 grid-rows-auto
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      <div
        v-for="(subm, index) in menus"
        class="sheet mx-1 my-2"
        :class="index === 4 ? 'sheet-odd' : ''"
      >
        <div class="sheet-inner">
          <div class="mb-6">
            <h2>{{ subm.title }}</h2>
            <p>{{ subm.subtitle }}</p>
          </div>
          <div
            v-for="item in subm.items"
            class="item px-6 flex justify-between"
          >
            <div class="mb-4">{{ item.name }}</div>
            <div>{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  min-height: 600px;
  background-color: $color-brown;
  padding-bottom: 6rem;

  .menu-head {
    height: 320px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../../assets/rectangle.svg");

    h1 {
      color: $color-white;
      font-family: $font-italianno;
      font-size: 6em;
    }
  }

  .sheets {
    background-color: $color-brown;
    grid-template-columns: repeat(3, minmax(1, 1fr));

    .sheet {
      color: white;
      border: 6px solid $color-light-brown;
      padding: 8px;
      transition: 0.2s linear all;

      h2 {
        font-family: $font-ephesis;
        font-size: 4em;
        color: $color-orange;
      }

      p {
        font-family: $font-dancing-script;
        font-size: 1.3em;
      }

      .sheet-inner {
        border: 1px solid $color-light-brown;
        padding: 12px;
        height: 100%;
      }

      &:hover {
        background-color: $color-brown-alt;
      }
    }

    .sheet-odd {
      background-color: $color-bordeaux;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Headline from "../headline/headline.vue";
import Menu from "../menu/menu.vue";

import menuData from "./menu-items.json";

export default defineComponent({
  data() {
    return {
      menus: menuData,
    };
  },
});
</script>
