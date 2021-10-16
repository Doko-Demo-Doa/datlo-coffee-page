<template>
  <div class="footer w-100 pt-10">
    <div class="map-container mx-auto md:max-w-4xl">
      <GoogleMap
        :api-key="apiKey as string"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>

    <div class="contact mt-12 flex flex-col justify-center items-center">
      <h1 class="mb-10 text-6xl">Đặt ngay:</h1>
      <a class="mb-4 text-4xl" href="tel:+0979338496">0979338496</a>
      <a class="text-4xl" href="tel:+0364291198">0364291198</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 600px;
  background-color: $color-white-cheese;

  .contact {
    color: $color-light-brown;
    height: 400px;
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../../assets/ornamental-frame.svg");

    h1 {
      font-family: $font-italianno;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 21.0764543, lng: 105.9313437 };
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_KEY;

    return { center, apiKey };
  },
});
</script>
