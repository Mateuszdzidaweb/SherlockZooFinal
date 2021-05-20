<template>
  <div class="w-full flex items-end justify-center visit-banner">
    <div
      class="w-auto h-auto header-shape flex flex-col justify-end items-start p-2 lg:p-5 mb-40"
    >
      <div class="py-2">
        <h1
          class="text-white text-4xl md:text-5xl lg:text-6xl main-heading-font text-center"
        >
          Explore Sherlock Zoo
        </h1>
        <h2
          class="text-white text-2xl md:text-3xl py-2 main-heading-font text-center"
        >
          Visit Us
        </h2>
      </div>
      <div
        class="w-full h-auto m-auto md:w-6/7 lg:flex lg:flex-row justify-center"
      >
        <!-- <div class="m-auto w-20 h-20 rounded-full border-2 border-white"> -->
          <span
            class="material-icons material-icons-visit-arrow md:text-5xl p-2 md:p-3 lg:p-3 rounded-full border-4 border-white"
          >
               arrow_downward
          </span>
        <!-- </div> -->
      </div>
    </div>

  </div>
</template>

<style lang="less">
// .visit-banner {
//     background-position: center center;
//     background-size: cover;
//     height: 50vh;
//     background-blend-mode: multiply;
// }

.material-icons-visit-arrow{
    font-size: 42px;
    color: white;
    transition: ease-in-out 0.5s !important;
}

.material-icons-visit-arrow:hover{
    transform: scale(1.2) !important;
    transition: ease-in-out 0.5s !important;
}
</style>