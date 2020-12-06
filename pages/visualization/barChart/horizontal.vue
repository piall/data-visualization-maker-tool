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
                type="text"
                :state="null"
                placeholder="টেক্সট / স্ট্রিং"
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
       <b-col md="10">
          <D3BarChart 
          :config="chart_config"
          :datum="chart_data"
          v-if="reload && chart_data[0].value1!='' && chart_data[0].value2!='' && chart_data[0].value3!=''"
          ></D3BarChart >
       </b-col>
       <!-- <b-col v-if="reload && chart_data[0].start!='' && chart_data[0].end!='' && chart_data[0].name!=''">
         <b-button variant="warning">কালার বদলানো</b-button>
       </b-col> -->
     </b-row>
    </center>
  </div>
</template>

<script>
import { D3BarChart  } from 'vue-d3-charts';

export default {
  components: {
    D3BarChart ,
  },
  data() {
    return {
      reload: true,
      chart_data: [
        {value1: "", value2: "", value3: ""},
      ],
      chart_config: {
        key: 'value3',
        values: ['value1', 'value2'],
        orientation: 'horizontal',
        color: {
          keys: {
            value1: '#41b882',
            value2: '#b35899', 
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
      this.chart_data.push({ value1: "", value2: "", value3: ""});
    },
    deleteRowOfColumn(index) {
      if (this.chart_data.length > 1) {
        this.chart_data.splice(index, 1);
      }
    },
    fillData(){
      this.chart_data = [
          {value1: 20, value2: 62, value3: 'lorem'},
          {value1: 28, value2: 47, value3: 'ipsum'},
          {value1: 35, value2: 36, value3: 'dolor'},
          {value1: 60, value2: 24, value3: 'sit'},
          {value1: 65, value2: 18, value3: 'amet'},
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
