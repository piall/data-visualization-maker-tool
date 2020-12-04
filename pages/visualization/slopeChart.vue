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
        <!-- {{ d }} -->
        <b-card header="আপনার ডেটা দিন" header-tag="header">
          <!-- <template #header>
              <h6 class="mb-0">start</h6>
          </template>-->
          <!-- <b-row>
              <b-col sm="12" md="4">শুরু</b-col>
              <b-col sm="12" md="4">শেষ</b-col>
              <b-col sm="12" md="4">নাম</b-col>
          </b-row>-->
          <b-row class="my-2" v-for="(dataObjects, ArrayIndex) in chart_data" :key="ArrayIndex">
            <b-col
              sm="12"
              md="4"
              v-for="(data,ObjectKey) in dataObjects"
              :key="ObjectKey"
              class="my-1"
            >
              <b-form-input
                type="number"
                :state="null"
                placeholder="শুরু"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey=='start'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="শেষ"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey=='end'"
              ></b-form-input>
              <b-form-input
                type="text"
                :state="null"
                placeholder="নাম"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey=='name'"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-card>
        <!-- <b-button variant="primary">ভিজুয়ালাইজেশন তৈরি করুন</b-button> -->
      </b-card-group>
      <!-- {{chart_data}} -->
      <D3SlopeChart :config="chart_config" :datum="chart_data" v-if="reload"></D3SlopeChart>
    </center>
  </div>
</template>

<script>
import { D3SlopeChart } from "vue-d3-charts";
export default {
  name: "D3SlopeChart",
  components: {
    D3SlopeChart
  },
  data() {
    return {
      manualDataInput: true,
      chart_config: {
        key: "name",
        color: {
          scheme: "schemeCategory10"
        },
        transition: {
          ease: "easeBounceOut",
          duration: 1000
        }
      },
      chart_data: [{ start: "", end: "", name: "" }],
      // count: 0
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

.btn-primary {
  background-color: #2f2e41;
  border: none;
  font-weight: 600;
  font-family: "Baloo Da 2";
}
</style>
