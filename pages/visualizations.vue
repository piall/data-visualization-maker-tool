<template>
  <div>
    <b-container fluid>
      <b-row class="p-5">
        <b-col md="12" lg="4">
          <ul>
            <li :class="{ active: manualInput }" @click="toggleManualInput">
              <i class="fa fa-clipboard"></i>
              ম্যানুয়াল ইনপুট
            </li>
            <li :class="{ active: fileUpload }" @click="toggleFileUpload">
              <i class="fa fa-upload"></i>
              আপলোড করুন
            </li>
          </ul>
        </b-col>
        <b-col>
          <div v-if="manualInput">
            <b-form-textarea
              id="textarea-rows"
              placeholder="আপনার JSON ডেটা পেস্ট করুন"
              rows="8"
              v-model="inputData"
            ></b-form-textarea>
            <b-button variant="success" @click="convert" class="my-2">convert</b-button>
          </div>
          <div v-if="fileUpload" class="box">
            <p>ফাইল আপলোড করুন</p>
            <input
              type="file"
              style="background-color:#2f2e41; color: white; padding:3px; border-radius:4px"
              @change="onFileChange"
            />
          </div>
          
        </b-col>
      </b-row>
      
      <!-- {{ inputData }} -->
    </b-container>
  </div>
</template>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script>

// import * as d3 from "d3";

export default {
  data() {
    return {
      inputData: "",
      manualInput: true,
      fileUpload: false,
    }
  },
  methods: {
    toggleFileUpload() {
      this.manualInput = false;
      this.fileUpload = true;
    },
    toggleManualInput() {
      this.manualInput = true;
      this.fileUpload = false;
    },
    convert(){
      var obj = JSON.parse(this.inputData)
      console.log(obj)
    }
  },
};
</script>

<style scoped>
li {
  margin: 2px;
  padding: 4px;
  list-style-type: none;
}
li:hover {
  cursor: pointer;
}
.active {
  background-color: #2f2e41;
  color: white;
  border-radius: 4px;
}
.box {
  border-style: dotted;
  text-align: center;
  padding: 90px 0;
  color: #2f2e41;
  font-weight: bold;
  cursor: pointer;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
