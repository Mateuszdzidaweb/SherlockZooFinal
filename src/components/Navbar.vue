<template>
  <div class="">
    <nav
      class="hidden md:hidden lg:block fixed w-full z-10 bg-white px-8 pt-2 shadow-md"
    >
      <div class="-mb-px flex justify-center">
        <router-link
          to="/home"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xl py-3 mr-8"
        >
          Home
        </router-link>
        <router-link
          to="/visit"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xl py-3 mr-8"
        >
          Visit
        </router-link>
        <router-link
          to="/events"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xl py-3 mr-8"
        >
          Events
        </router-link>
        <router-link
          to="/animals"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xl py-3 mr-8"
        >
          Animals
        </router-link>
        <router-link
          to="/zoo-at-home"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xl py-3 mr-8"
        >
          Zoo At Home
        </router-link>
        <router-link
          to="/donate"
          class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xl py-3 mr-8"
        >
          Donate
        </router-link>
      </div>
    </nav>
    <div
      id="nav"
      class="w-full h-20 flex items-center justify-around bottom-nav dark-blue-bg bottom-0 fixed py-1 md:h-24 pt-2 z-20 navbar lg:hidden xl:hidden"
      :style="{
        background:
          'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
          require('@/assets/images/greenIMG-pattern.png') +
          ') center',
      }"
    >
      <router-link class="w-14 h-auto px-3 md:w-auto flex flex-col" to="/home">
        <span
          class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center md:w-full"
          :class="{ 'router-link-active': isHomeRouteActive }"
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
          :class="{ 'router-link-active': isVisitRouteActive }"
        >
          map
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
          :class="{ 'router-link-active': isEventsRouteActive }"
        >
          event_available
        </span>
        <h1
          class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
        >
          Events
        </h1>
      </router-link>
      <div
        @click="navMore = !navMore"
        class="w-14 h-auto px-3 md:w-20 flex flex-col"
      >
        <span
          class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center"
          :class="{ 'router-link-active': navMore }"
        >
          more_horiz
        </span>
        <h1
          class="text-white text-center activePage font-bold flex justify-around text-xl md:text-3xl"
          :class="{ 'router-link-active': navMore }"
        >
          More
        </h1>
      </div>
    </div>

    <div
      v-if="navMore === true"
      class="fixed w-2/3 md:w-2/5 h-full bg-green-700 flex flex-col right-0 justify-center z-10 lg:hidden side-mobile-nav"
      :style="{
        background:
          'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
          require('@/assets/images/greenIMG-pattern.png') +
          ') center',
      }"
    >
      <span
        @click="navMore = !navMore"
        class="material-icons material-icons-close md:text-5xl md:pl-4 fixed right-5 top-2"
      >
        close
      </span>
      <router-link
        class="w-auto h-auto px-3 md:w-auto flex flex-row"
        to="/animals"
      >
        <div class="flex flex-row" @click="navMore = !navMore">
          <span
            class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center"
            :class="{ 'router-link-active': isAnimalsRouteActive }"
          >
            pets
          </span>
          <h1
            class="text-white text-center activePage flex justify-around text-2xl font-bold md:text-3xl self-center ml-5"
          >
            Animals
          </h1>
        </div>
      </router-link>
      <router-link
        class="w-auto h-auto px-3 md:w-auto md:ml-3 flex flex-row py-5"
        to="/zoo-at-home"
      >
        <div class="flex flex-row" @click="navMore = !navMore">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class="w-12 zoo-at-home-icon"
            :class="{ 'router-link-active': isZooAtHomeRouteActive }"
          >
            <path
              d="M256,371c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10c-5.52,0-10,4.48-10,10C246,366.52,250.48,371,256,371z"
            />
            <path
              d="M156,111h15.857l-22.929,22.929c-2.859,2.86-3.715,7.161-2.168,10.898c1.548,3.736,5.194,6.173,9.239,6.173h40
				c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10h-15.857l22.929-22.929c2.859-2.86,3.715-7.161,2.168-10.898
				C203.691,93.437,200.045,91,196,91h-40c-5.522,0-10,4.478-10,10C146,106.522,150.478,111,156,111z"
            />
            <path
              d="M256,151c16.542,0,30-13.458,30-30s-13.458-30-30-30s-30,13.458-30,30S239.458,151,256,151z M256,111
				c5.514,0,10,4.486,10,10s-4.486,10-10,10c-5.514,0-10-4.486-10-10S250.486,111,256,111z"
            />
            <path
              d="M336,151c16.542,0,30-13.458,30-30s-13.458-30-30-30s-30,13.458-30,30S319.458,151,336,151z M336,111
				c5.514,0,10,4.486,10,10s-4.486,10-10,10c-5.514,0-10-4.486-10-10S330.486,111,336,111z"
            />
            <path
              d="M502,451h-30c0-16.175,0-299.741,0-310c0-16.542-13.458-30-30-30h-16V90c0-4.755-3.349-8.853-8.009-9.8
				C402.243,77,390,64.757,386.8,49.009C385.853,44.349,381.755,41,377,41H135c-4.755,0-8.853,3.349-9.8,8.009
				C122,64.757,109.757,77,94.009,80.2C89.349,81.147,86,85.245,86,90v21H70c-16.542,0-30,13.458-30,30c0,10.259,0,293.825,0,310H10
				c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10c180.495,0,312.737,0,492,0c5.522,0,10-4.478,10-10
				C512,455.478,507.522,451,502,451z M106,97.59c17.119-6.021,30.569-19.471,36.59-36.59h226.82
				c6.021,17.119,19.471,30.569,36.59,36.59v46.82c-17.119,6.021-30.569,19.471-36.59,36.59H142.59
				c-6.021-17.119-19.471-30.569-36.59-36.59V97.59z M113,451H60V331h53V451z M186,451h-53V331h53V451z M306,451h-40v-50
				c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v50h-40V331h100V451z M207.006,311c4.646-22.795,24.847-40,48.994-40
				c24.449,0,44.44,17.418,49.001,40H207.006z M379,451h-53V331h53V451z M452,451h-53V331h53V451z M452,311H325.287
				c-4.78-33.609-33.674-60-69.287-60c-35.203,0-64.406,26.123-69.274,60H60V141c0-5.514,4.486-10,10-10h16v21
				c0,4.755,3.349,8.853,8.009,9.8C109.757,165,122,177.243,125.2,192.991c0.947,4.66,5.045,8.009,9.8,8.009h242
				c4.755,0,8.853-3.349,9.8-8.009C390,177.243,402.243,165,417.991,161.8c4.66-0.947,8.009-5.045,8.009-9.8v-21h16
				c5.514,0,10,4.486,10,10V311z"
            />
          </svg>
          <h1
            class="text-white text-center activePage flex justify-around text-2xl font-bold md:text-3xl self-center ml-5"
          >
            Zoo At Home
          </h1>
        </div>
      </router-link>
      <router-link
        class="w-auto h-auto px-3 md:w-20 flex flex-row"
        to="/donate"
      >
        <div class="flex flex-row" @click="navMore = !navMore">
          <span
            class="material-icons material-icons-nav md:text-5xl md:pl-4 self-center"
            :class="{ 'router-link-active': isDonateRouteActive }"
          >
            volunteer_activism
          </span>
          <h1
            class="text-white text-center activePage flex justify-around text-2xl font-bold md:text-3xl self-center ml-5"
          >
            Donate
          </h1>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMore: false,
    };
  },
  methods: {},
  computed: {
    isHomeRouteActive() {
      return this.$route.matched.some((route) => route.path === "/home");
    },
    isVisitRouteActive() {
      return this.$route.matched.some((route) => route.path === "/visit");
    },
    isEventsRouteActive() {
      return this.$route.matched.some((route) => route.path === "/events");
    },
    isAnimalsRouteActive() {
      return this.$route.matched.some((route) => route.path === "/animals");
    },
    isZooAtHomeRouteActive() {
      return this.$route.matched.some((route) => route.path === "/zoo-at-home");
    },
    isDonateRouteActive() {
      return this.$route.matched.some((route) => route.path === "/donate");
    },
  },
};
</script>

<style lang="less">
.material-icons-nav {
  color: white;
  font-size: 42px !important;
}

.material-icons-close {
  color: white;
  font-size: 32px !important;
}
.zoo-at-home-icon {
  fill: white;
}
.router-link-active {
  color: goldenrod !important;
  fill: goldenrod !important;
  stroke: goldenrod !important;
  h1 {
    color: goldenrod !important;
  }
}
.side-mobile-nav{
  
}
</style>