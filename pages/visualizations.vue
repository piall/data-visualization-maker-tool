<template>
  <div>
    <b-container fluid>
      <b-row class="p-5">
        <b-col md="12" lg="4">
          <ul>
            <li :class="{ active: fileUpload }" @click="toggleFileUpload">
              <i class="fa fa-upload"></i>
              আপলোড করুন
            </li>
          </ul>
        </b-col>
        <b-col>
          <div v-if="fileUpload" class="box">
            <p>ফাইল আপলোড করুন</p>
            <input
              type="file"
              style="background-color:#2f2e41; color: white; padding:3px; border-radius:4px"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
      <center>
        <div class="mb-2 my-3">
          <div class="row no-gutters d-flex justify-content-center">
            <div class="cols">
              <b-avatar  href="/visualization/wordCloud" class="mx-4" src="~assets/D3WordsCloud.svg" size="8rem"></b-avatar>
              <p>ওয়ার্ডস ক্লাউড</p>
            </div>
            <div class="cols">
              <b-avatar  href="/visualization/slopeChart" class="mx-4" src="~assets/D3SlopeChart.svg" size="8rem"></b-avatar>
              <p>স্লপ চার্ট</p>
            </div>
            <div class="cols">
              <b-avatar  href="/visualization/pieChart" class="mx-4" src="~assets/D3PieChart.svg" size="8rem"></b-avatar>
              <p>পাই চার্ট</p>
            </div>
            <div class="cols">
              <b-avatar  href="/visualization/barChart" class="mx-4" src="~assets/D3BarChart.svg" size="8rem"></b-avatar>
              <p>বার চার্ট</p>
            </div>
            <div class="cols">
              <b-avatar  href="/visualization/lineChart" class="mx-4" src="~assets/D3LineChart.svg" size="8rem"></b-avatar>
              <p>লাইন চার্ট</p>
            </div>
          </div>
        </div>
        </center>
  </div>
</template>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script>

export default {
  data() {
    return {
      fileUpload: true,
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

.b-avatar{
  background-color: #fdf9ad;
}

.b-avatar:hover{
  background-color:  #fcf798;
}
</style>
