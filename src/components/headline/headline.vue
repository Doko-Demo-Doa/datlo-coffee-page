<template>
  <div class="headline flex flex-col justify-center items-center">
    <div class="title text-9xl">Datlo</div>

    <p class="text-5xl">Tea & coffee</p>

    <div class="stamp mt-14 flex flex-col justify-center items-center">
      <p>Ship tận nơi:</p>
      <a href="tel:+0979338496">0979338496</a>
      <a href="tel:+0364291198">0364291198</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$stamp-size: 100%;

.headline {
  height: 700px;
  width: 100%;
  color: white;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../../assets/hero3.jpg");

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
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../../assets/circle.svg");

    p {
      font-size: 2em;
      margin-bottom: 1.2rem;
      font-family: $font-ephesis;
    }

    > a {
      font-size: 2.6em;
    }
  }
}
</style>
