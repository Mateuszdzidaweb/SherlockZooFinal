<template>
  <div class="">
    <nav class="bg-white px-8 pt-2 shadow-md">
      <div class="-mb-px flex justify-center">
        <router-link
          to="/home"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          Home
        </router-link>
        <router-link
          to="/visit"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          Visit
        </router-link>
        <router-link
          to="/events"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          Events
        </router-link>
        <router-link
          to="/animals"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          Animals
        </router-link>
        <router-link
          to="/zoo-at-home"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          Zoo At Home
        </router-link>
        <!-- <router-link
          to="/donate"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
        >
          Donate
        </router-link> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
</style>