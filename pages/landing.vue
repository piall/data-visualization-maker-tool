<template>
  <div>
  </div>
</template>
<script>
import axios from 'axios';
import Header from '~/components/Header.vue'
export default {
  name: 'Landing',
  components: {
    Header
  },
  data() {
    return {
      name: '',
      email: '',
      loginStatus: true,
    }
  },
  created() {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  },
  mounted(){
    this.$store.commit("setLoginStatus", true)
  },
  watch: {
    loginStatus(newValue) {
      this.$store.commit("setLoginStatus", newValue)
    }
  }
}
</script>