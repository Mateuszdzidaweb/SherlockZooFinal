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



 <main class="my-8">
        <div class="container mx-auto px-6">
            <h3 class="text-gray-700 text-2xl font-medium">Sherlock Zoo Animals</h3>
            <span class="mt-3 text-sm text-gray-500">200+ Animals</span>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                    </div>
                    <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">Animal Name</h3>
                    </div>
                </div>
            </div>
            
            <div class="flex justify-center">
                <div class="flex rounded-md mt-8">
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>1</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>2</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>3</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
                </div>
            </div>
        </div>
    </main>



        </Tab>



        <Tab name="Bristol">
          <p>lorem10 sdds</p>
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
  },
};
</script>