<template>
  <div>
    <b-row>
      <b-col
        xs="8"
        md="8"
        lg="6"
        xl="4"
        offset-md="2"
        offset-lg="3"
        offset-xl="4"
      >
        <b-container fluid="lg">
          <b-card
            title="রেজিস্ট্রেশন করুন"
            img-src=".././assets/man_standing.svg"
            img-alt="Image"
            img-top
            tag="article"
            style="margin-top:40px"
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
                    placeholder="আপনার পাসওয়ার্ড দিন (সর্বনিম্ন ৬ অক্ষর)"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-container>
            <b-button variant="primary" @click="register()"
              >একাউন্ট খুলুন</b-button
            >
            <hr />
            <b-button variant="success" href="./login">লগইন করুন</b-button>
          </b-card>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
var validator = require("email-validator");
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      emailIsOk: false,
      passwordIsOk: false,
      error: ""
    };
  },
  methods: {
    emailCheck() {
      if(validator.validate(this.email)) this.emailIsOk = true;
      else alert("আপনার ইমেল ফরমেট ঠিক নেই অথবা আগে থেকেই রেজিষ্টার করা আছে");
    },
    passwordCheck(){
      if(this.password.length > 5) this.passwordIsOk = true;
      else alert("আপনার পাসওয়ার্ড ৬ অক্ষরের চেয়ে ছোট");
    },
    register() {
      this.emailCheck();
      this.passwordCheck();
      if(this.passwordIsOk && this.emailIsOk) {
         let newUser = {
         email: this.email,
         password: this.password
         };
        axios.post("http://localhost:5000/signup", newUser)
        .then(res => {
          this.error = "";
          this.$router.push('/login');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
      }
    }
  }
};
</script>

<style lang="css" scoped>
div.container-lg {
  display: flex;
  align-items: center;
  text-align: center;
}
.card {
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
  background-color: #575a88;
}

.form-control {
  font-weight: 400;
}

hr {
  margin: 0px;
}
</style>
