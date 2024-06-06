<template>
  <nav
    class="fixed left-4 right-4 flex flex-wrap items-center justify-between px-2 py-3 bg-primary-400 top-2 rounded min-w-[420px]"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <NuxtLinkLocale
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          to="/"
        >
          Starter Template
        </NuxtLinkLocale>
        <button
          class="text-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="i-[fa--bars]"></i>
        </button>
      </div>

      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul
          class="flex flex-col lg:flex-row list-none ml-auto items-start lg:items-center space-x-2"
        >
          <slot />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const showMenu = ref(false);

const toggleNavbar = () => {
  showMenu.value = !showMenu.value;
};
</script>
