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
              md="6"
              v-for="(data, ObjectKey) in dataObjects"
              :key="ObjectKey"
              class="my-1"
            >
              <b-form-input
                type="text"
                :state="null"
                placeholder="স্ট্রিং"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'word'"
              ></b-form-input>
              <b-form-input
                type="number"
                :state="null"
                placeholder="সংখ্যা"
                @keyup.enter="addRowToColumn"
                @click.ctrl="deleteRowOfColumn(ArrayIndex)"
                v-model="chart_data[ArrayIndex][ObjectKey]"
                v-if="ObjectKey == 'size'"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
      <b-row>
       <b-col md="12">
          <D3WordsCloud
          :config="chart_config" 
          :datum="chart_data"
          v-if="reload && chart_data[0].word!='' && chart_data[0].size!=''"
        ></D3WordsCloud >
       </b-col>
     </b-row> 
    </center>
  </div>
</template>

<script>
import { D3WordsCloud } from 'vue-d3-charts';
export default {
  components: {
    D3WordsCloud 
  },
  data() {
    return {
      manualDataInput: true,
      chart_data: [{ word: "", size: ""}],
      reload: true,
      chart_config: {
        angle: { start: 0, end: 90, steps: 2 },
        color: {
          key: false,
          keys: false,
          scheme: false,
          current: "#1f77b4",
          default: "#AAA",
          axis: "#000",
        },
        fontFamily: "monospace",
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
        transition: {
          duration: 350,
          ease: "easeLinear",
        },
      }
    };
  },
  methods: {
    addRowToColumn() {
      this.chart_data.push({ word: "", size: ""});
    },
    deleteRowOfColumn(index) {
      if (this.chart_data.length > 1) {
        this.chart_data.splice(index, 1);
      }
    },
    fillData(){
      this.chart_data = [{
          word: "Lorem",
          size: 30
        },{
          word: "Ipsum",
          size: 23
        },{
          word: "Dolor",
          size: 64
        }]
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
