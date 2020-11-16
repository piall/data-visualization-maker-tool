<template>
  <div>
    <center class="my-3">
      <h3 v-if="!savedVisualization">আপনার সেভ করা কোন ভিজুয়ালাইজেশন নেই</h3>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedVisualization: null
    };
  }
};
</script>

<style scoped>
* {
  font-family: "Baloo Da 2";
  font-weight: 600;
}
</style>