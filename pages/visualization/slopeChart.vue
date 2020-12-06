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
                v-if="ObjectKey == 'start'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="সংখ্যা"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'end'"
              ></b-form-input>
              <b-form-input
                type="text"
                :state="null"
                placeholder="টেক্সট / স্ট্রিং"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'name'"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group> 
     <b-row>
       <b-col md="10">
          <D3SlopeChart
          :config="chart_config"
          :datum="chart_data"
          v-if="reload && chart_data[0].start!='' && chart_data[0].end!='' && chart_data[0].name!=''"
        ></D3SlopeChart>
       </b-col>
       <!-- <b-col v-if="reload && chart_data[0].start!='' && chart_data[0].end!='' && chart_data[0].name!=''">
         <b-button variant="warning">কালার বদলানো</b-button>
       </b-col> -->
     </b-row>
    </center>
  </div>
</template>

<script>
import { D3SlopeChart } from "vue-d3-charts";
export default {
  components: {
    D3SlopeChart
  },
  data() {
    return {
      manualDataInput: true,
      chart_config: {
        key: 'name',
        color: {
          scheme: 'schemeCategory10'
        },
        transition: {
          ease: 'easeBounceOut',
          duration: 1000
        },
        margin: {
          top: 10,
          right: 200,
          bottom: 20,
          left: 200
        },
      },
      chart_data: [{ start: "", end: "", name: ""  }],
      count: 0,
      reload: true
    };
  },
  methods: {
    change() {
      this.manualDataInput = true;
    },
    addRowToColumn() {
      this.chart_data.push({ start: "", end: "", name: "" });
    },
    deleteRowOfColumn(index) {
      if (this.chart_data.length > 1) {
        this.chart_data.splice(index, 1);
      }
    },
    fillData(){
      this.chart_data = [
          { start: 2355, end: 5855, name: "Lorem" },
          { start: 4260, end: 6510, name: "Ipsum" },
          { start: 5029, end: 5138, name: "Dolor" }
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

/* .btn-primary {
  background-color: #2f2e41;
  border: none;
  font-weight: 600;
  font-family: "Baloo Da 2";
} */
</style>
