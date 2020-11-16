<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col
          sm="12"
          md="6"
          lg="4"
          xl="3"
          class="cards"
          v-for="index in names"
          :key="index.visualizationName"
        >
          <Card :visualizationInfo="index" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import Vue from "vue";
// import VueScreen from "vue-screen";
// Vue.use(VueScreen);
export default {
  data() {
    return {
      names: [
        {
          visualizationName: "হিস্টোগ্রাম (Histogram)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/histogram"
        },
        {
          visualizationName: "পাই চার্ট (Pie Chart)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/pieChart"
        },
        {
          visualizationName: "বার চার্ট (Bar Chart)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/barChart"
        },
        {
          visualizationName: "স্কেটার প্লট (Scatter Plot)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/scatterPlot"
        },
        {
          visualizationName: "লাইন চার্ট (Line Chart)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/lineChart"
        },
        {
          visualizationName: "হিট ম্যাপ (Heat Map)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/heatMap"
        }
      ]
      // screenWidth: this.$screen.width + "px",
      // screenHeight: this.$screen.height + "px",
    };
  },
  methods: {},
  watch: {}
};
</script>

<style scoped>
</style>
