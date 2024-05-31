<template>
  <div class="bg-cyan-400 h-full">
    <!-- Navbar Dropdown 1 row -->
    <UiNavbar />
    <button
      class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button">
      <i class="i-[ph--acorn]"></i>
      <span class="i-mdi-home"></span>
      aaa
    </button>

    <button
      class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button">
      <i class="i-[fa--heart]"></i> Small
    </button>
    <NuxtLink to="login">Login</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false
})
</script>
