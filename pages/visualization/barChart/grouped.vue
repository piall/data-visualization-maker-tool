<template>
<div>
    <center>
      <h5 class="my-2">ব্যাবহারবিধি</h5>
      <ul>
        <li>নতুন সারি বানানোর জন্য enter চাপুন</li>
        <li>পরের সারিতে যাওয়ার জন্য tab চাপুন</li>
        <li>সারি বাদ দেয়ার জন্য Ctrl + click করুন</li>
      </ul>
      <b-button variant="warning" @click="fillData">
        ডেমো ডেটা ব্যাবহার করুন
      </b-button>
      <b-card-group deck class="mx-1 my-3">
        <b-card header="আপনার ডেটা দিন" header-tag="header">
          <b-row
            class="my-2"
            v-for="(dataObjects, ArrayIndex) in chart_data"
            :key="ArrayIndex"
          >
            <b-col
              sm="12"
              md="2"
              v-for="(data, ObjectKey) in dataObjects"
              :key="ObjectKey"
              class="my-1"
            >
              <b-form-input
                type="number"
                :state="null"
                placeholder="সংখ্যা"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value1'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="সংখ্যা"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value2'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="সংখ্যা"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value3'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="সংখ্যা"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value4'"
              ></b-form-input>
              <b-form-input
                type="text"
                :state="null"
                placeholder="টেক্সট / স্ট্রিং"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value5'"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group> 
      <b-row>
       <b-col md="12">
           <D3BarChart
            :config="chart_config"
            :datum="chart_data"
            v-if="reload && chart_data[0].value1!='' && chart_data[0].value2!='' && chart_data[0].value3!='' && chart_data[0].value4!='' && chart_data[0].value5!=''"
          ></D3BarChart>
       </b-col>
       <!-- <b-col v-if="reload && chart_data[0].start!='' && chart_data[0].end!='' && chart_data[0].name!=''">
         <b-button variant="warning">কালার বদলানো</b-button>
       </b-col> -->
     </b-row>
     
    </center>
  </div>
</template>

<script>
import { D3BarChart } from 'vue-d3-charts';

export default {
  components: {
    D3BarChart,
  },
  data() {
    return {
      reload: true,
      chart_data: [
        {value1: "", value2: "", value3: "", value4: "", value5: ""},
      ],
      chart_config: {
        key: 'value5',
        values: ['value1', 'value2', 'value3', 'value4'],
        axis: {
          yTicks: 4
        },
        color: {
          keys: {
            value1: '#F98B3B',
            value2: '#F26643',
            value3: '#FF463D',
            value4: '#C92C39',
          },
        },
        margin: {
          top: 10,
          right: 200,
          bottom: 20,
          left: 200
        },
      },
    };
  },
   methods: {
    change() {
      this.manualDataInput = true;
    },
    addRowToColumn() {
      this.chart_data.push({value1: "", value2: "", value3: "", value4: "", value5: ""});
    },
    deleteRowOfColumn(index) {
      if (this.chart_data.length > 1) {
        this.chart_data.splice(index, 1);
      }
      // console.log(index);
    },
    fillData(){
      this.chart_data = [
        {value1: 1648, value2: 9613, value3: 1390, value4: 9130, value5: '2007'},
        {value1: 2479, value2: 6315, value3: 1560, value4: 6150, value5: '2008'},
        {value1: 3200, value2: 12541, value3: 5421, value4: 2541, value5: '2009'},
      ];
    }
  },
  watch: {
    chart_data: {
      handler: function() {
        console.log("changed data");
        this.reload = false;
        this.$nextTick(function() {
          this.reload = true;
        });
      },
      deep: true
    }
  }
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
* {
  font-family: "Baloo Da 2";
  overflow: hidden;
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
.card{
    background-color: #faf7c2;
    /* color:white; */
    font-weight: bold;
    border: none;
}
</style>
