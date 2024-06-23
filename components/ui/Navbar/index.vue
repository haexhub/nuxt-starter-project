<template>
  <nav
    class="flex items-center justify-between px-3 py-2 bg-primary dark:bg-dark-primary rounded-b"
  >
    <div
      class="px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between grow"
    >
      <div class="flex grow lg:grow-0">
        <UiButton @click="toogleSidebar">
          <i class="i-[ph--sidebar] text-slate-50" />
        </UiButton>
        <NuxtLinkLocale
          class="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white mx-4"
          to="/"
        >
          Starter Template
        </NuxtLinkLocale>

        <button
          class="text-white text-xl leading-none px-3 py-1 ml-auto border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="i-[fa--bars]"></i>
        </button>
      </div>

      <div
        :class="[showMenu ? 'flex' : 'hidden']"
        class="lg:flex lg:justify-end"
      >
        <ul
          class="flex flex-col lg:flex-row list-none items-start lg:items-center lg:space-x-2 space-y-2 lg:space-y-0 h-full w-full"
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

const { toogleSidebar } = useSidebar();
</script>
