<template>
  <div>
    <b-row>
      <b-col xs="8" md="8" lg="6" xl="4" offset-md="2" offset-lg="3" offset-xl="4">
    <b-container fluid="lg">
      <b-card
        img-src=".././assets/login.svg"
        img-alt="Image"
        img-top
        tag="article"
        style="margin-top:40px;"
        class="mb-2"
      >
        <b-container fluid>
          <b-row class="my-2">
            <b-col>
              <b-form-input
                id="input-none"
                type="email"
                v-model="email"
                placeholder="আপনার ইমেইল দিন"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-2">
            <b-col>
              <b-form-input
                id="input-valid"
                type="password"
                v-model="password"
                placeholder="আপনার পাসওয়ার্ড দিন"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <b-button variant="primary" @click="login()">লগ ইন</b-button>
        <hr />
        <b-button variant="success" href="/register">নতুন একাউন্ট তৈরি করুন</b-button>
      </b-card>
    </b-container>
    </b-col>
    </b-row>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
      login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post("http://localhost:5000/loginUser", user)
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$store.commit("setLoginStatus", true);
            this.$router.push("/");
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
      })
    }
  }
}
</script>


<style lang="css" scoped>
div.container-lg {
  /* background-color: aqua; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  text-align: center;
}

.card {
  /* margin: 155px; */
  padding: 20px;
  font-family: "Baloo Da 2";
}

.card-img-top {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
}

.btn {
  margin: 15px;
  font-weight: 600;
  border: none;
}

.btn-primary {
  background-color: #f9a826;
}

.btn-success {
  background-color: #2f2e41;
}

.form-control {
  font-weight: 400;
}

hr {
  margin: 0px;
}
</style>