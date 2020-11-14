<template>
  <div>
    <FileOption @manualInput="change" v-if="!manualDataInput"/>
    <section v-else>
      
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      manualDataInput: false
    };
  },
  methods: {
    change() {
      this.manualDataInput = true;
    }
  }
};
</script>

<style lang="css" scoped>
</style>