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
                <!-- <b-col sm="3">
            <label for="input-none">ইমেইল:</label>
                </b-col>-->
                <b-col>
                  <b-form-input
                    id="input-none"
                    type="email"
                    v-model="email"
                    placeholder="আপনার ইমেইল দিন"
                  ></b-form-input>
                  <!-- state null will make like normal input box -->
                </b-col>
              </b-row>

              <b-row class="my-2">
                <!-- <b-col sm="3">
            <label for="input-valid">পাসওয়ার্ড:</label>
                </b-col>-->
                <b-col>
                  <b-form-input
                    id="input-valid"
                    type="password"
                    v-model="password"
                    placeholder="আপনার পাসওয়ার্ড দিন"
                  ></b-form-input>
                  <!-- state true will make the icon green -->
                </b-col>
              </b-row>
              <!-- <b-row class="my-2"> -->
              <!-- <b-col> -->
              <!-- <b-form-input
                    id="input-valid"
                    type="password"
                    :state="null"
                    placeholder="পুনরায় আপনার পাসওয়ার্ড দিন"
                  ></b-form-input> -->
              <!-- state false will make the icon cross -->
              <!-- </b-col> -->
              <!-- </b-row> -->
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
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      // console.log(this.email);
      // console.log(this.password);
      let newUser = {
        email: this.email,
        password: this.password
      };
      axios.post("http://localhost:5000/signup", newUser).then(
        function res () {
          console.log(res)
        },
        function err () {
          console.log(err.response);
        }
      );
    }
  }
};
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

  /* max-width: 50%; */
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
