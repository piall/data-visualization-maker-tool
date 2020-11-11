<template>
  <b-card
    :img-src="visualizationInfo.imageAddress"
    img-alt
    img-top
    tag="article"
    style="max-width: 25rem;"
    class="mb-2"
  >
    <b-card-text>{{ visualizationInfo.visualizationName }}</b-card-text>
  </b-card>
</template>

<script>
//src="@/assets/login.png"
//<img :src="require(`@/assets/${posts.img}`)" alt="">
export default {
  props: {
    visualizationInfo: Object
  }
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  float: none;
  margin: 15px;
  padding: 0px 0px;
  align-items: center;
}

.card:hover {
  cursor: pointer;
}
.card-text {
  font-family: "Baloo Da 2";
  font-weight: 600;
}
</style>
