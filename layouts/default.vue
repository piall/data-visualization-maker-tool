<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header :loginStatus="loginStatus" />
    <Nuxt />
    <!-- <Footer /> -->
  </div>
</template>

<style>
@font-face {
  font-family: Noto Sans;
  font-weight: normal;
  src: url("~assets/fonts/Noto_Sans_Bengali-Regular.ttf") format("truetype");
}
@font-face {
  font-family: Baloo Da;
  src: url("~assets/fonts/Baloo_Da-Regular.ttf") format("truetype");
}
@font-face {
  font-family: Baloo Da 2;
  src: url("~assets/fonts/BalooDa2-Regular.ttf") format("truetype");
}
@font-face {
  font-family: Noto Sans;
  font-weight: bold;
  src: url("~assets/fonts/Noto_Sans_Bengali-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "Charukola";
  src: url("~assets/fonts/Charukola-Regular.ttf") format("truetype");
}

body {
  background-color: #f9f7cf;
  font-family: 'Baloo Da 2';
}
/* 
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */
</style>

<script>
// import * as d3 from "d3";

export default {
  data() {
    return {
      loginStatus: false
    };
  }
};
</script>