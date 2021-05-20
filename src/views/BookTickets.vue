<template>
  <div>
    <div class="h-20 bg-green-700 lg:pt-40"></div>
    <div class="py-2">
      <h1 class="text-4xl lg:text-5xl lg:py-2 font-bold text-green-700">
        Tickets Booking
      </h1>
      <h1 class="pt-2 text-2xl">We can't wait to welcome you to the Sherlooc Zoo!</h1>
      <h1 class="pt-2">Choose your site</h1>
      <div class="flex flex-row justify-around w-96 m-auto py-5">
        <div class="bg-green-600 text-white p-2 w-60">
          <h1>Philadelphia</h1>
        </div>
        <div class="border-2 border-gray-500 text-black p-2 w-60">
          <h1>Bristol</h1>
        </div>
      </div>
    </div>

    <div class="w-auto h-auto m-auto">
      <div class="flex flex-row m-auto w-full lg:w-2/3">
        <div class="border-2 w-full">
          <h1 class="border-b-2 p-2 font-bold">Tickets</h1>
          <h2 class="text-2xl border-b-2 p-2">Adult</h2>
          <h2  class="text-2xl border-b-2 p-2">Child</h2>
          <h2  class="text-2xl border-b-2 p-2">Age 2 and Under</h2>
          <h2 class="text-2xl border-b-2 p-2">Concession</h2>
          <h2  class="text-2xl border-b-2 p-2">Family</h2>
        </div>
        <div class="border-2 w-full">
          <h1 class="border-b-2 p-2 font-bold">Price</h1>
          <h2  class="text-2xl border-b-2 p-2">£21.99</h2>
          <h2  class="text-2xl border-b-2 p-2">£15.99</h2>
          <h2  class="text-2xl border-b-2 p-2">Free</h2>
          <h2  class="text-2xl border-b-2 p-2">£17.99</h2>
          <h2  class="text-2xl border-b-2 p-2">£30.99</h2>
        </div>
      </div>
    </div>

    <div class=" lg:w-3/4 m-auto flex flex-col lg:flex-row justify-around py-10">
      <div class="py-2 w-full lg:w-1/3">
        <vc-calendar is-expanded :attributes="attrs" />
      </div>
      <div class="w-auto h-auto p-10 bg-green-700 rounded-2xl">
        <h1 class="text-white font-bold py-2">Booking Details</h1>
        <div class="flex flex-row justify-center p-2">
          <span
            class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center"
            :class="{ 'router-link-active': isVisitRouteActive }"
          >
            event
          </span>
          <h1 class="text-white ml-2">Date:</h1>
        </div>
        <h1 class="text-white">Price: £0.00</h1>
      </div>
    </div>
    <button class="bg-green-700 text-2xl p-2 text-white rounded-xl w-40 font-bold mb-10">Book</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: "Philadelphia",
      attrs: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },
};
</script>


<style lang="less">
.vc-svg-icon[data-v-19b6cf78] {
  color: black !important;
}
</style>