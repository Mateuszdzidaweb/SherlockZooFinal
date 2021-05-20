<template>
  <div>
    <article>
      <header class="tabs">
        <ul class="flex flex-row justify-center text-2xl">
          <li v-for="(tab, index) in tabs" :key="index" class="">
            <div
              class="text-black text-2xl md:text-4xl font-bold m-auto w-44 md:w-60 p-1  md:p-2 border-2 border-black"
              :class="{ isActive: tab.isActive }"
              @click="selectTab(tab)"
            >
              {{ tab.name }}
            </div>
          </li>
        </ul>
      </header>
      <section class="tabs-details">
        <slot></slot>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
};
</script>


<style lang="less">
.isActive {
  color: white;
  background-color: #057856;
}
</style>