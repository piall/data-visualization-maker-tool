<template>
  <div>
    <b-container fluid="lg">
      <b-jumbotron>
        <!-- <center><h1>লগইন করূন</h1></center> -->
        <!-- <hr class="my-4"> -->
        <b-img src=".././assets/login.svg" fluid alt="Fluid-grow image"></b-img>
        <b-container fluid>
          <img src alt />

          <b-row class="my-1">
            <!-- <b-col sm="3">
      <label for="input-none">ইমেইল:</label>
            </b-col>-->
            <b-col sm="12">
              <b-form-input id="input-none" :state="null" placeholder="আপনার ইমেইল দিন"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <!-- <b-col sm="3">
      <label for="input-valid">পাসওয়ার্ড:</label>
            </b-col>-->
            <b-col sm="12">
              <b-form-input id="input-valid" :state="true" placeholder="আপনার পাসওয়ার্ড দিন"></b-form-input>
              <!-- state false will make the icon cross -->
            </b-col>
          </b-row>
        </b-container>

        <center>
          <b-button variant="primary" href="#">লগ ইন</b-button>
        </center>
        <hr />
        <center>
          <b-button variant="success" href="#">নতুন একাউন্ট তৈরি করুন</b-button>
        </center>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600&display=swap");

.jumbotron {
  margin: 155px;
  padding: 20px;
  font-family: "Baloo Da 2";
}
.btn {
  margin: 15px;
  font-weight: 600;
}
.form-control {
  font-weight: 400;
}
hr {
  margin: 0px;
}
</style>
