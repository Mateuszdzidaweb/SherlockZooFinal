<template>
  <div>
    <div class="w-full text-3xl flex justify-center font-petite-caps py-10">
      <h1 class="w-full text-3xl flex justify-center font-petite-caps">
        Ways you can support us
      </h1>
    </div>

    <div
      class="containerBox flex flex-row flex-wrap justify-center w-full lg:mb-28 sm: h-3/4 sm: mb-40 md:mb-20"
    >
      <div
        class="lg:w-1/3 lg:h-full relative mx-2 bg-cover bg-no-repeat bg-center supportusIMG sm: w-full h-auto sm:mb-28 monkey-donate-image"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/animals/monkey-animal.png') +
            ')',
        }"
      >
        <div
          class="absolute w-full -bottom-32 lg:left-16 lg:w-4/5 card-body rounded-md bg-green-700 sm:left-0 img-box-text"
        >
          <h5
            class="card-title flex justify-center text-3xl md:text-4xl py-2 text-white"
          >
            You can Donate
          </h5>
          <p
            class="card-text text-center text-lg px-2 md:text-2xl md:py-2 text-white md:w-4/5 m-auto"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            veritatis et quidem eligendi provident iusto.
          </p>
          <button
            class="btn btn-primary center w-3/6 lg:w-4/5 md:py-2 text-2xl py-2 md:text-3xl justify-center font-extrabold rounded-md bg-red-600  my-4 text-white"
          >
            Start Shopping
          </button>
        </div>
      </div>

      <div
        class="mt-36 md:mt-10 lg:mt-0 lg:w-1/3 lg:h-full relative mx-2 bg-cover bg-no-repeat bg-center supportusIMG sm: w-full h-auto sm:mb-28 monkey-donate-image"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('@/assets/images/gift-img.png') +
            ')',
        }"
      >
        <div
          class="absolute w-full -bottom-32 lg:left-16 lg:w-4/5 card-body rounded-md bg-green-700 sm:left-0 img-box-text"
        >
          <h5
            class="card-title flex justify-center text-3xl md:text-4xl py-2 text-white"
          >
            You can Donate
          </h5>
          <p
            class="card-text text-center text-lg px-2 md:text-2xl md:py-2 text-white md:w-4/5 m-auto"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            veritatis et quidem eligendi provident iusto.
          </p>
          <button
            class="btn btn-primary center w-3/6 lg:w-4/5 md:py-2 text-2xl py-2 md:text-3xl justify-center font-extrabold rounded-md bg-red-600 my-4 text-white"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less">
.monkey-donate-image {
  background-position: center !important;
  background-size: cover !important;
  //   background: no-repeat !important;
  height: 600px !important;
  max-height: 600px;
  //   height: 500px !important;
}

@media only screen and (max-width: 600px) {
  .monkey-donate-image {
    height: 300px !important;
  }
}
</style>