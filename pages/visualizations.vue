<template>
  <div>
    <b-container fluid>
      <b-row class="p-5">
        <b-col md="12" lg="4">
          <ul>
            <li :class="{active:manualInput}" @click="toggleManualInput">
              <i class="fa fa-clipboard"></i>
              ম্যানুয়াল ইনপুট
            </li>
            <li :class="{active:fileUpload}" @click="toggleFileUpload">
              <i class="fa fa-upload"></i>
              আপলোড করুন
            </li>
          </ul>
        </b-col>
        <b-col>
          <div v-if="manualInput">
            <b-form-textarea id="textarea-rows" placeholder="আপনার JSON ডেটা পেস্ট করুন" rows="8"></b-form-textarea>
          </div>
          <div v-if="fileUpload" class="box">
            <p>ফাইল আপলোড করুন</p>
            <input
              type="file"
              style="background-color:#2f2e41; color: white; padding:3px; border-radius:4px"
            />
          </div>
        </b-col>
      </b-row>
      <p>ভিজুয়ালেইজেশন এর ধরন বাছুন</p>
      <b-row>
        <b-col>Hexagonal Binning</b-col>
        <b-col>Contour Plot</b-col>
        <b-col>Circular Dendrogram</b-col>
        <b-col>Cluster Dendrogram</b-col>
        <b-col>Multi-Line Chart</b-col>
        <b-col>Pie chart</b-col>
        <b-col>Multi-Line Chart</b-col>
        <b-col>Multi-Line Chart</b-col>
      </b-row>
      <p>কোন অক্ষে কোন কলাম থাকবে</p>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      manualInput: true,
      fileUpload: false
    };
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
    selectFile() {}
  },
  watch: {}
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
</style>
