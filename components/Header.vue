<template>
  <b-navbar toggleable="sm">
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <NuxtLink to="/">হোম</NuxtLink>
        <NuxtLink to="/visualizations">ব্যাবহার করুন</NuxtLink>
        <NuxtLink to="/savedVisualization" v-if="loginStatus">সেভ করা ভিজুয়ালাইজেশন</NuxtLink>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-if="loginStatus">
        <NuxtLink to="/">লগ আউট</NuxtLink>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-else>
        <NuxtLink to="/register">একাউন্ট তৈরি করুন</NuxtLink>
        <NuxtLink to="/login">লগ ইন</NuxtLink>
        <b-icon icon="circle-fill" animation="throb" font-scale="0.5" variant="danger" class="my-2"></b-icon>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script scoped>
export default {
  props: ["loginStatus"]
};
</script>

<style>
.navbar {
  background-color: #2f2e41;
  font-family: "Baloo Da 2";
  font-weight: 500;
}

a {
  color: azure;
  margin-right: 13px;
}

a:hover {
  text-decoration: none;
  color: black;
}
</style>