<template>
  <div class="headline flex flex-col justify-center items-center">
    <div class="title text-9xl">Datlo</div>

    <p class="text-5xl">Tea & coffee</p>

    <div class="stamp mt-14 flex flex-col justify-center items-center">
      <p>Đặt hàng ngay:</p>
      <div>0979338496</div>
      <div>0364291198</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$stamp-size: 400px;

.headline {
  height: 700px;
  width: 100%;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../../assets/hero.jpg");

  .title {
    color: white;
    font-family: "Ephesis", cursive;
  }

  p {
    color: white;
    font-family: $font-dancing-script;
  }

  .stamp {
    width: $stamp-size;
    height: $stamp-size;
    background-repeat: no-repeat;
    background-image: url("../../assets/circle.svg");

    p {
      font-size: 2em;
    }

    > div {
      font-size: 2.6em;
    }
  }
}
</style>
