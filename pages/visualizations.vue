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
          </div>
          <div v-if="fileUpload" class="box">
            <p>ফাইল আপলোড করুন</p>
            <input
              type="file"
              style="background-color:#2f2e41; color: white; padding:3px; border-radius:4px"
              @change="onFileChange"
              v-if="!image"
            />
            <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
  </div>
          </div>
          
        </b-col>
      </b-row>
      <!-- <p>ভিজুয়ালেইজেশন এর ধরন বাছুন</p>

      <b-row>
        <b-col md="4">
          <Card />
        </b-col>
      </b-row>
      <p>কোন অক্ষে কোন কলাম থাকবে</p>
      <b-row>
        x-axis
        <b-col>
          <input type="checkbox" @change="check()" />
          column1
          <br />
          <input type="checkbox" @change="check()" />
          column-2
          <br />
        </b-col>
      </b-row>
      <b-row>
        y-axis
        <b-col>
          <input type="checkbox" @change="check()" />
          column1
          <br />
          <input type="checkbox" @change="check()" />
          column-2
          <br />
        </b-col>
      </b-row> -->
      {{ inputData }}
    </b-container>
  </div>
</template>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script>
// <b-col>Hexagonal Binning</b-col>
// <b-col>Contour Plot</b-col>
// <b-col>Circular Dendrogram</b-col>
// <b-col>Cluster Dendrogram</b-col>
// <b-col>Multi-Line Chart</b-col>
// <b-col>Pie chart</b-col>
// <b-col>Multi-Line Chart</b-col>
// <b-col>Multi-Line Chart</b-col>
// import * as d3 from "d3";

export default {
  data() {
    return {
      image: '',
      a: [1, 2, 3],
      b: ["a", "b", "c"],
      row: "",
      col: "",
      inputData: "",
      manualInput: true,
      fileUpload: false,
      names: [
        {
          visualizationName: "হিস্টোগ্রাম (Histogram)",
          imageAddress: "/_nuxt/assets/histogram.svg",
          routingAddress: "./visualization/histogram"
        },
        {
          visualizationName: "পাই চার্ট (Pie Chart)",
          imageAddress: "/_nuxt/assets/pie_chart.png",
          routingAddress: "./visualization/pieChart"
        },
        {
          visualizationName: "বার চার্ট (Bar Chart)",
          imageAddress: "/_nuxt/assets/bar_chart.png",
          routingAddress: "./visualization/barChart"
        },
        {
          visualizationName: "স্কেটার প্লট (Scatter Plot)",
          imageAddress: "/_nuxt/assets/scatter_plot.png",
          routingAddress: "./visualization/scatterPlot"
        },
        {
          visualizationName: "লাইন চার্ট (Line Chart)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/lineChart"
        },
        {
          visualizationName: "হিট ম্যাপ (Heat Map)",
          imageAddress: "/_nuxt/assets/login.svg",
          routingAddress: "./visualization/heatMap"
        }
      ]
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
    inputData() {
      this.inputData = JSON.parse(val);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  },
  // watch: {
  //   inputData: function(val) {
  //     this.inputData = JSON.parse(val);
  //   }
  // }
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
