<template>
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
            <b-form-input id="input-none" type="email" :state="null" placeholder="আপনার ইমেইল দিন"></b-form-input>
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
              :state="null"
              placeholder="আপনার পাসওয়ার্ড দিন"
            ></b-form-input>
            <!-- state true will make the icon green -->
          </b-col>
        </b-row>
        <b-row class="my-2">
          <b-col>
            <b-form-input
              id="input-valid"
              type="password"
              :state="null"
              placeholder="পুনরায় আপনার পাসওয়ার্ড দিন"
            ></b-form-input>
            <!-- state false will make the icon cross -->
          </b-col>
        </b-row>
      </b-container>
      <b-button variant="primary">একাউন্ট খুলুন</b-button>
      <hr />
      <b-button variant="success" href="./login">লগইন করুন</b-button>
    </b-card>
  </b-container>
</template>

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
