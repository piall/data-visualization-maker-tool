<template>
  <div>
    <FileOption @manualInput="change" v-if="!manualDataInput" />
    <div v-else>
      <center>
        <h5 class="my-2">ব্যাবহারবিধি</h5>
        <ul>
          <li>নতুন সারি বানানোর জন্য enter চাপুন</li>
          <li>পরের সারিতে যাওয়ার জন্য tab চাপুন</li>
          <li>সারি বাদ দেয়ার জন্য Ctrl + click করুন</li>
        </ul>
        <b-card-group deck class="mx-1 my-3">
          <b-card header="featured" header-tag="header">
            <template #header>
              <h6 class="mb-0">নাম</h6>
            </template>
            <b-row class="my-2">
              <b-col sm="12" v-for="(input,index) in inputBoxFirstColumn" :key="index" class="my-1">
                <b-form-input
                  :state="null"
                  placeholder="আপনার ডেটা দিন"
                  @keyup.enter="addRowToColumn"
                  @click.ctrl="deleteRowOfColumn(index)"
                  v-model="inputBoxFirstColumn[index]"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-card>

          <b-card header="featured" header-tag="header">
            <template #header>
              <h6 class="mb-0">ভ্যালু</h6>
            </template>
            <b-row class="my-2">
              <b-col
                sm="12"
                v-for="(input,index) in inputBoxSecondColumn"
                :key="index"
                class="my-1"
              >
                <b-form-input
                  type="number"
                  :state="null"
                  placeholder="আপনার ডেটা দিন"
                  @keyup.enter="addRowToColumn"
                  @click.ctrl="deleteRowOfColumn(index)"
                  v-model="inputBoxSecondColumn[index]"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
        <b-button variant="primary">ভিজুয়ালাইজেশন তৈরি করুন</b-button>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      manualDataInput: false,
      inputBoxFirstColumn: [""],
      inputBoxSecondColumn: [""]
    };
  },
  methods: {
    change() {
      this.manualDataInput = true;
    },
    addRowToColumn() {
      this.inputBoxFirstColumn.push("");
      this.inputBoxSecondColumn.push("");
    },
    deleteRowOfColumn(index) {
      if (this.inputBoxFirstColumn.length > 1) {
        this.inputBoxFirstColumn.splice(index, 1);
        this.inputBoxSecondColumn.splice(index, 1);
      }
    }
  }
};
</script>

<style lang="css" scoped>
* {
  font-family: "Baloo Da 2";
}

h6 {
  font-weight: bold;
  font-size: 17px;
}

h5 {
  font-family: "Baloo Da";
}

li {
  font-family: "Baloo Da 2";
  font-size: 18px;
  font-weight: 500;
}

.btn-primary {
  background-color: #2f2e41;
  border: none;
  font-weight: 600;
  font-family: "Baloo Da 2";
}
</style>