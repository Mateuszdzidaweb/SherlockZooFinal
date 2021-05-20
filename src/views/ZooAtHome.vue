<template>
  <div>
    <ZooAtHomeBaanner></ZooAtHomeBaanner>

    <div class="w-full h-auto">
      <div
        class="w-full p-5 lg:w-2/3 m-auto h-full flex flex-col lg:flex-row items-center"
      >
        <div class="w-40 h-auto p-2">
          <img class="m-auto" src="@/assets/images/crayons.svg" alt="" />
        </div>
        <div class="m-auto">
          <h1 class="text-4xl py-2 font-fantasy">It's time to make something fun!</h1>
        </div>
      </div>
    </div>

    <div class="containerBox flex flex-row justify-center flex-wrap w-full mt-10">
      <div
        class="image-box-with-title flex flex-column justify-start rounded-lg w-96 h-80 mx-2 mt-2 bg-cover bg-no-repeat bg-center"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/hedgehog-house.png') +
            ')',
        }"
      >
        <div class="h-14 p-1 mb-3 bg-white w-auto self-end flex">
          <h3 class="text-3xl self-center font-fantasy font-bold" style="">Build a Hedgehog House</h3>
        </div>
      </div>
      <div
        class="image-box-with-title flex flex-column justify-start rounded-lg w-96 h-80 mx-2 mt-2 bg-cover bg-no-repeat bg-center"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/bird-house.png') +
            ')',
        }"
      >
        <div class="h-14 p-1 mb-3 bg-white w-auto self-end flex">
          <h3 class="text-3xl self-center font-fantasy font-bold" style="">Build a Bird House</h3>
        </div>
      </div>
      <div
        class="image-box-with-title flex flex-column justify-start rounded-lg w-96 h-80 mx-2 mt-2 bg-cover bg-no-repeat bg-center"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/butterfly-img.png') +
            ')',
        }"
      >
        <div class="h-14 p-1 mb-3 bg-white w-auto self-end flex">
          <h3 class="text-3xl self-center font-fantasy font-bold" style="">Make Butterfly</h3>
        </div>
      </div>
    </div>

    <img
      class="center justify-center relative lg:top-40 sm: top-36"
      src="@/assets/images/animals-circle-img.png"
      alt=""
    />
    <div
      class="containerBox h-96 flex flex-column flex-wrap justify-around content-center w-full"
      style="background-color: #f3a820"
    >
      <div class="lg:w-4/5 h-auto pt-20 text-white sm: w-full font-fantasy">
        <h1 class="w-4/5 flex justify-center mt-content2 lg:text-5xl center text-center">
          Play Quiz and find out what animal you are !
        </h1>
        <p class="flex justify-center p-3 text-center">{{ body }}</p>
        <button
          class="center transition ease-in-out duration-700 text-white text-3xl font-bold p-2 rounded-md -bottom-5 border-2 border-solid"
        >
          Play Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ZooAtHomeBaanner from "@/components/ZooAtHomeComponents/AnimalsBanner.vue";
export default {
  data() {
    return {};
  },
  components: {
    ZooAtHomeBaanner,
  },
};
</script>
