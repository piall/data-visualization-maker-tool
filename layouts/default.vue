<template>
  <div>
    <b-navbar toggleable="sm">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <NuxtLink to="/dashboard">ড্যাশবোর্ড</NuxtLink>
          <NuxtLink to="/" v-if="loginStatus">সেভ করা ভিজুয়ালাইজেশন</NuxtLink>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="loginStatus">
          <NuxtLink to="/">লগ আউট</NuxtLink>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <NuxtLink to="/register">একাউন্ট তৈরি করুন</NuxtLink>
          <NuxtLink to="/login">লগ ইন</NuxtLink>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600&display=swap");
.navbar {
  background-color: #f9a826;
  font-family: "Baloo Da 2";
  font-weight: 500;
}

a {
  color: azure;
  margin-right: 13px;
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
export default {
  data() {
    return {
      loginStatus: true
    };
  }
};
</script>