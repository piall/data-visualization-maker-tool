<template>
  <center class="custom">
    <b-card
      :img-src="visualizationInfo.imageAddress"
      img-alt
      img-top
      tag="article"
      style="max-width: 25rem;"
      class="mb-2 my-3"
      @click="alert('hi')"
    >
      <b-card-text>{{ visualizationInfo.visualizationName }}</b-card-text>
      <b-button :href="visualizationInfo.routingAddress" variant="primary">তৈরি করুন</b-button>
    </b-card>
  </center>
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
/* .card {
  margin: 0 auto;
  float: none;
  margin: 15px;
  padding: 0px 0px;
  align-items: center;
} */

/* .card:hover {
  cursor: pointer;
} */

.card-text {
  font-family: "Baloo Da 2";
  font-weight: 600;
}

.btn-primary {
  font-family: "Baloo Da 2";
  font-weight: 600;
  background-color: #2f2e41;
  border: none;
}

.btn:hover {
  background-color: black;
  border: none;
}


</style>
