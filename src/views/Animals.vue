<template>
  <div>
    <AnimalsBanner></AnimalsBanner>
    <div class="w-full h-auto pt-10 flex flex-col">
      <h1 class="text-4xl lg:text-5xl text-black font-bold aling-self m-auto">
        Choose Site
      </h1>
      <!-- <div class="flex flex-row">
        <div class="w-1/2">Philadelphia</div>
        <div class="w-1/2">Bristol</div>
      </div> -->
    </div>
    <div class="p-10">
      <Tabs>
        <Tab name="Philadelphia" selected="true">
            <AnimalComponent></AnimalComponent>
        </Tab>

        <Tab name="Bristol">
          <AnimalBristolComponent></AnimalBristolComponent>
        </Tab>
      </Tabs>
    </div>

    <!-- <div
      class="containerBox flex flex-row justify-center flex-wrap bg-red-200 w-full mt-20"
    >
      <div
        class="image-box-with-title flex flex-column justify-start rounded-lg w-96 h-80 mx-2 mt-2 bg-cover bg-no-repeat bg-center"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/animals/monkey-animal.png') +
            ')',
        }"
      >
        <div class="h-14 p-1 mb-3 bg-white w-3/5 self-end flex">
          <h3 class="text-3xl self-center font-bold" style="">Moneky</h3>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import AnimalsBanner from "@/components/AnimalsPageComponents/AnimalsBanner.vue";
import AnimalComponent from "@/components/AnimalsPageComponents/AnimalComponent.vue";
import AnimalBristolComponent from "@/components/AnimalsPageComponents/AnimalBristolComponent.vue";
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";
export default {
  data() {
    return {};
  },
  components: {
    AnimalsBanner,
    Tab,
    Tabs,
    AnimalComponent,
    AnimalBristolComponent
  },
};
</script>
