<template>
<div>
    <center>
      <h5 class="my-2">ব্যাবহারবিধি</h5>
      <ul>
        <li>নতুন সারি বানানোর জন্য enter চাপুন</li>
        <li>পরের সারিতে যাওয়ার জন্য tab চাপুন</li>
        <li>সারি বাদ দেয়ার জন্য Ctrl + click করুন</li>
      </ul>
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
                placeholder="ভ্যালু-১"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value1'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="ভ্যালু-২"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value2'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="ভ্যালু-৩"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value3'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="ভ্যালু-৪"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value4'"
              ></b-form-input>
              <b-form-input
                type="text"
                :state="null"
                placeholder="ভ্যালু-৫"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'value5'"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group> 
      <D3BarChart
        :config="chart_config"
        :datum="chart_data"
        v-if="reload && chart_data[0].value1!='' && chart_data[0].value2!='' && chart_data[0].value3!='' && chart_data[0].value4!='' && chart_data[0].value5!=''"
      ></D3BarChart>
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
      console.log(index);
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
