<template>
  <div class="">
    <nav
      class="hidden md:hidden md:block lg:block fixed w-full z-10 bg-white px-8 pt-2 shadow-md"
    >
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
    <div
      id="nav"
      class="w-full h-20 flex items-center justify-around bottom-nav dark-blue-bg bottom-0 fixed py-1 md:h-24 z-10 pt-2 z-99 navbar bg-green-700 lg:hidden xl:hidden"
    >
      <router-link class="w-14 h-auto px-3 md:w-auto flex flex-col" to="/home">
        <span
          class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center md:w-full"
        >
          home
        </span>
        <h1
          class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
        >
          Home
        </h1>
      </router-link>
      <router-link class="w-14 h-auto px-3 md:w-20 flex flex-col" to="/visit">
        <span
          class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center"
        >
          store
        </span>
        <h1
          class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
        >
         Visit
        </h1>
      </router-link>
      <router-link class="w-14 h-auto px-3 md:w-20 flex flex-col" to="/events">
        <span
          class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center"
        >
          shopping_cart
        </span>
        <h1
          class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
        >
          Events
        </h1>
      </router-link>
      <router-link class="w-14 h-auto px-3 md:w-20 flex flex-col" to="/snapp">
        <span
          class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center"
        >
          photo_camera
        </span>
        <h1
          class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
        >
         More
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.material-icons-nav {
  color: white;
  font-size: 42px !important;
}
</style>