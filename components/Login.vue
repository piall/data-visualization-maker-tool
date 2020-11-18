<template>
  <center>
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
            <b-col sm="12">
              <b-form-input
                id="input-none"
                type="email"
                :state="null"
                placeholder="আপনার ইমেইল দিন"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-2">
            <b-col sm="12">
              <b-form-input
                id="input-valid"
                type="password"
                :state="null"
                placeholder="আপনার পাসওয়ার্ড দিন"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <b-button variant="primary">লগ ইন</b-button>
        <hr />
        <b-button variant="success" href="/register">নতুন একাউন্ট তৈরি করুন</b-button>
      </b-card>
    </b-container>
  </center>
</template>

<style lang="css" scoped>
.card {
  margin: 155px;
  padding: 20px;
  font-family: "Baloo Da 2";
  max-width: 50%;
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
