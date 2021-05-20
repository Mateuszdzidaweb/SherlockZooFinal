<template>
  <div>
    <!-- <h1 class="h-40">{{ id }}</h1> -->

    <section
      v-if="philadelphiaAnimal"
      class="text-gray-700 body-font flex md:flex-row flex-col  lg:flex-col items-center bg-white pt-20"
    >
      <div
        class="md:w-1/2 w-full h-96 animal-bg"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/animals/' + philadelphiaAnimal.animalIMG) +
            ') center',
        }"
      ></div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {{ philadelphiaAnimal.animalHeading }}
        </h1>
        <p class="mb-8 leading-relaxed">
          {{ philadelphiaAnimal.animalInfo }}
        </p>
        <div
          class="flex flex-row justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200"
        >
          <input
            class="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0"
            placeholder="Email"
            type="text"
          />
          <button
            class="inline-flex text-black py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-gray-100"
          >
            Subscribe
          </button>
        </div>
        <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Keep in tough with us.</p>
        <div class="flex lg:flex-row md:flex-col">
          <a
            class="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            class="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            class="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      philadelphiaAnimal: null,
    };
  },
  created() {
    axios
      .get(
        "https://sherloc-zoo-final-default-rtdb.firebaseio.com/PhiladelphiaAnimals/" +
          this.id +
          ".json"
      )
      .then((response) => {
        this.philadelphiaAnimal = response.data;
        console.log(this.philadelphiaAnimal);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="less">
.animal-bg{
    background-size: cover !important;
}
</style>
