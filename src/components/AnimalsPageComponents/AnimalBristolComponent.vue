<template>
  <div>
    <main class="my-8">
      <div class="container mx-auto px-6">
        <h3 class="text-gray-700 text-2xl font-medium">Sherlock Zoo Animals</h3>
        <span class="mt-3 text-sm text-gray-500">200+ Animals</span>
        <div
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
        >
          <div
            v-for="philadelphiaAnimal in philadelphiaAnimals"
            :key="philadelphiaAnimal.id"
            class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden philadelphia-animal"
          >
            <router-link
              :to="{ name: 'Single Animal', params: { id: philadelphiaAnimal.id } }"
            >
              <div
                class="flex items-end justify-end h-56 w-full bg-cover"
                :style="{
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
                    require('@/assets/images/animals/' + philadelphiaAnimal.animalIMG) +
                    ') center',
                }"
              ></div>
            </router-link>
            <div class="px-5 py-3">
              <h3 class="text-gray-700 text-xl lg:text-2xl uppercase">
                {{ philadelphiaAnimal.animalName }}
              </h3>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="flex rounded-md mt-8">
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
              ><span>Previous</span></a
            >
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              ><span>1</span></a
            >
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              ><span>2</span></a
            >
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
              ><span>3</span></a
            >
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
              ><span>Next</span></a
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
const PhiladelphiaAnimalsUrl =
  "https://sherloc-zoo-final-default-rtdb.firebaseio.com/BristolAnimals" + ".json";
export default {
  data() {
    return {
      philadelphiaAnimals: [],
    };
  },
  created() {
    axios
      .get(PhiladelphiaAnimalsUrl)
      .then((response) => {
        this.philadelphiaAnimals = response.data;
        console.log(this.philadelphiaAnimals);
      })
      .then(() => {
        // let random = this.philadelphiaAnimals[Math.floor(Math.random() * random.length)];
        // this.philadelphiaAnimals = random;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {},
};
</script>

<style lang="less">
.bg-cover {
  background-size: cover;
}

.philadelphia-animal {
  transform: scale(1) !important;
  transition: ease-in-out 0.5s !important;
  cursor: pointer;
  &:hover {
    transform: scale(1.1) !important;
    transition: ease-in-out 0.5s !important;
  }
}
</style>
