<template>
  <div class="home">
    <Home-Banner></Home-Banner>

    <div class="py-10">
      <h1 class="w-full text-3xl flex justify-center font-petite-caps">
        Visit Our Animals
      </h1>
    </div>

    <div class="containerBox flex flex-row flex-wrap justify-center w-full">
      <div class="lg:w-96 h-80 border-2 mx-2 sm: w-full sm: mb-2 max-w-sm">
        <h1 class="w-4/5 flex justify-center mt-2 center text-center">
          Our Animals at Sherlock Zoo
        </h1>
        <p class="flex justify-center p-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam
          animi, ab odio repellat magni!
        </p>
        <button
          class="center transition ease-in-out duration-700 bg-green-600 text-white font-bold p-2 rounded-md -bottom-5"
        >
          Find Out More
        </button>
      </div>
      <div
        class="rounded-lg max-w-sm lg:w-96 h-80 mx-2 bg-no-repeat bg-center sm: mb-2 sm: w-full bg-cover"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/animals/tiger-animal.png') +
            ') center',
        }"
      >
        <div class="flex flex-row items-end h-full w-full">
          <div
            class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200"
          >
            <h3 class="text-base font-bold leading-5 uppercase">
              Lorem, ipsum dolor sit amet elit foure consectetur adipisicing.
            </h3>
            <div class="inline-flex items-center"></div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="rounded-lg max-w-sm lg:w-96 h-80 mx-2 bg-cover bg-no-repeat bg-center sm: mb-2 sm: w-full"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/animals/pengiun-animal.png') +
            ') center',
        }"
      >
        <div class="flex flex-row items-end h-full w-full">
          <div
            class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200"
          >
            <h3 class="text-base font-bold leading-5 uppercase">
              Lorem, ipsum dolor sit amet elit foure consectetur adipisicing.
            </h3>
            <div class="inline-flex items-center"></div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <WaysYouCanSuport></WaysYouCanSuport>

    <div
      class="flex flex-row h-auto lg:w-full lg:flex lg:flex-wrap lg:flex-col img-pattern help-animals-container lg:py-24"
    >
      <div
        class="w-full flex-col lg:w-full lg:px-2 xl:w-4/5 lg:h-96 m-auto lg:flex lg:flex-row flex-wrap justify-center"
      >
        <div
          class="left-img-col w-full lg:w-1/3 h-full help-animlal-bg rounded-md"
        >
          <div
            class="h-80 lg:relative lg:w-80 lg:h-48 lg:bg-white lg:top-2/3 lg:left-2/3 lg:flex lg:flex-col lg:items-center lg:justify-center lg:rounded-md lg:shadow-lg inline-block broder-green help-animal-textBox"
          >
            <div class="hidden lg:block"></div>
          </div>
        </div>
        <div
          class="right-content-col w-full lg:w-2/3 h-full flex items-center justify-end"
        >
          <div
            class="w-full p-4 lg:w-2/3 md:full md:w-4/5 m-auto md:py-10 lg:right lg:mr-3"
          >
            <h1 class="text-left m-auto md:py-2 text-white main-heading-font">
              Help our animals to survive !
            </h1>
            <h2 class="text-left headingtest secondary-heading-font text-2xl py-3 md:py-2">
              Our animals are top priority!
            </h2>
            <p class="text-left text-xl py-2 main-text-font text-white md:py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perspiciatis unde eos atque, vitae quod ab earum dolores velit
              saepe itaque quas totam temporibus et, hic, iure voluptatum rerum
              sit?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from "@/components/HomePageComponents/HomeBaner.vue";
import WaysYouCanSuport from "@/components/HomePageComponents/WaysYouCanSuport.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    WaysYouCanSuport,
  },
};
</script>

<style lang="less">
.monkey-donate-image {
  background-position: center !important;
  background-size: cover !important;
  //   background: no-repeat !important;
  height: 600px !important;
  max-height: 600px;
  //   height: 500px !important;
}

.broder-green {
  border: 5px solid;
  //  padding: 15px;
  border-image: url("../../src/assets/images/greenIMG-pattern.png") 30 round;
}

.main-heading-font {
  font-family: "Black Han Sans", sans-serif;
}

.secondary-heading-font {
  font-family: "Chango", cursive;
}

.bg-cover {
  background-size: cover !important;
}

@media only screen and (max-width: 600px) {
  .monkey-donate-image {
    height: 300px !important;
  }

  .broder-green {
    border: none;
  }
}

@media only screen and (max-width: 1024px) {
  .broder-green {
    border: none;
  }
  .help-animals-container {
    height: auto !important;
  }
  .help-animals-container {
    box-shadow: none !important;
  }
}
</style>
