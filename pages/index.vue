<template>
  <div>
    <center>
      <section class="col-md-6 my-3">
        <h4>¯^vMZ</h4>
        <b-img center src="~/assets/music.svg" class="my-3" style="max-width:30%"></b-img>
        <p>কোন একাউন্ট খোলার ঝামেলা না নিয়ে আপনি আপনার ম্যনুয়াল ইনপুট করা ডেটা দিয়ে অথবা কোন ডেটাসেট থেকে আপনার পছন্দের ভিজুয়ালাইজেশন বানাতে পারবেন। সেটি চাইলে .jpg, svg ফরমেট তে সেভ করা যাবে আপনার ডিভাইসে এবং যদি একাউন্ট থাকে তাহলে অনলাইনেও। যদি সিম্পল লিনিয়ার রিগ্ররেশন ব্যবহার করা যায় এমন ডেটা থাকে সেক্ষেত্রে রিয়েল টাইম প্রেডিকশন দেখতে পারবেন।</p>
      </section>
      <section class="col-md-6 my-3">
        <!-- <h4>মটিভেশন</h4> -->
        <h4>‡c«iYv</h4>
        <b-img center src="~/assets/direction.svg" class="my-3" style="max-width:30%"></b-img>
        <p>
          এই ধরনের বাংলা ভাষায় ডেটা ভিজুয়ালাইজেশন এর জন্য ওয়েবসাইট নেই। যেগুলো ইংরেজি ওয়েবসাইট আছে সেগুলোতেও কিছু ফিচার প্রিমিয়াম থাকে।
          এই ওয়েবসাইট এর সবগুলো ফিচার বিনামুল্য ব্যবহার করা যাবে। বর্তমানে ভিজুয়ালাইজেশন এর ধরন সিমীত হলেও ভবিষ্যতে এর পরিধি বাড়ানো হবে।
        </p>
      </section>
      <section class="my-4 bottom-content">
        <!-- converted Unicode to ANSI -->
        <!-- <h4>ভিজুয়ালাইজেশন সমূহ</h4> -->
        <h4>wfRyqvjvB‡Rkb mg~n</h4>
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
      </section>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style lang="css" scoped>

.bottom-content {
  padding-bottom: 10px;
}

p {
  font-family: "Baloo Da 2";
  margin-top: 4px;
  font-weight: 500;
  font-size: 16px;
}

h4 {
  font-family: "Charukola";
  font-weight: bold;
  font-size: 28px;
  color: #f9a826;
}

.b-avatar{
  background-color: #fdf9ad;
}

.b-avatar:hover{
  background-color:  #fcf798;
}
</style>