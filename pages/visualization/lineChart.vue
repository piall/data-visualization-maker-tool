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
              md="4"
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
            </b-col>
          </b-row>
        </b-card>
      </b-card-group> 
       <b-row>
       <b-col md="12">
          <D3LineChart 
        :config="chart_config"
        :datum="chart_data"
        v-if="reload && chart_data[0].value1!='' && chart_data[0].value2!='' && chart_data[0].value3!=''"
      ></D3LineChart >
       </b-col>
       <!-- <b-col v-if="reload && chart_data[0].start!='' && chart_data[0].end!='' && chart_data[0].name!=''">
         <b-button variant="warning">কালার বদলানো</b-button>
       </b-col> -->
     </b-row>
      
    </center>
  </div>
</template>

<script>
import { D3LineChart  } from 'vue-d3-charts';

export default {
  components: {
    D3LineChart ,
  },
  data() {
    return {
      reload: true,
      chart_data: [
        {value1: "", value2: "", value3: ""},
      ],
      chart_config: {
        values: ['value1', 'value2'],
        date: {
          key: 'value3',
          inputFormat: '%Y',
          outputFormat: '%Y',
        },
        points:false,
        axis: {
          yTicks: 3,
        },
        margin: {
          top: 20,
          right: 100,
          bottom: 20,
          left: 100
        },
      },
      // count:2010
    };
  },
   methods: {
    change() {
      this.manualDataInput = true;
    },
    addRowToColumn() {
      this.chart_data.push({ value1: "", value2: "", value3: "" });
    },
    deleteRowOfColumn(index) {
      if (this.chart_data.length > 1) {
        this.chart_data.splice(index, 1);
      }
    },
    fillData(){
        this.chart_data = [
        {value1: 238, value2: 134, value3: 2000},
        {value1: 938, value2: 478, value3: 2001},
        {value1: 1832, value2: 1392, value3: 2002},
        {value1: 2092, value2: 2343, value3: 2003},
        {value1: 2847, value2: 2346, value3: 2004},
        {value1: 2576, value2: 2233, value3: 2005},
        {value1: 2524, value2: 2325, value3: 2006},
        {value1: 1648, value2: 2456, value3: 2007},
        {value1: 2479, value2: 2329, value3: 2008},
        {value1: 3200, value2: 2438, value3: 2009}
      ];
    }
  },
  watch: {
    chart_data: {
      handler: function() {
        // console.log("changed data");
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
