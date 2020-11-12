<template>
  <center>
    <b-card
      img-src=".././assets/uploading.svg"
      img-alt
      img-top
      tag="article"
      style="max-width: 32rem;"
      class="mb-2 p-4 my-4"
    >
      <b-card-text>আপনার ফাইল আপলোড করুন</b-card-text>
      <b-button class="custom">ফাইল আপলোড করুন</b-button>
      <br />
      <hr />
      <b-button variant="primary">ম্যানুয়াল ভাবে ইনপুট করুন</b-button>
    </b-card>
  </center>
</template>

<style lang="css" scoped>
* {
  font-family: "Baloo Da 2";
  font-weight: 600;
}
.card-text {
  color: #323145;
}
.btn {
  border: none;
}
.custom {
  background-color: #f9a826;
}
.btn-primary {
  background-color: #f86d70;
}
</style>