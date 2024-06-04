<template>
  <div
    class="bg-slate-200 dark:bg-slate-800 dark:text-dark-text h-full flex flex-col justify-between z-30 overflow-hidden shrink-0"
  >
    <div>
      <div
        class="flex flex-col justify-center py-4 items-center gap-y-2 overflow-hidden"
      >
        <!-- <Icon
          name="logo"
          class="w-12 text-primary-300"
        /> -->

        <Transition name="fade">
          <span
            v-show="!settings.collapsed"
            class=""
          >
            Challenge Me
          </span>
        </Transition>
      </div>

      <div class="flex flex-col space-y-2">
        <NuxtLinkLocale
          v-for="item in menu.admin"
          :to="item.to"
          activeClass="text-primary-active dark:text-dark-primary-active"
          class="flex items-center justify-start hover:bg-primary-hover dark:hover:bg-dark-primary px-4 py-2 rounded space-x-2"
        >
          <!-- <Icon
            :name="item.icon"
            class="size-5 shrink-0 text-center"
          /> -->

          <Transition
            name="fade"
            class=""
          >
            <span v-if="!settings.collapsed">
              {{ item.label }}
            </span>
          </Transition>
        </NuxtLinkLocale>

        <!-- <Button @click="isDark = !isDark">mode {{ isDark }}</Button> -->
      </div>
    </div>

    <div class="mx-auto my-4">
      <button
        :icon="settings.collapsed ? 'BARS' : 'TIMES'"
        @click="toogleSidebar"
        outlined
        severity="primary"
        text
        rounded
        class="size-6"
      />
    </div>
  </div>
</template>

<script setup>
const { toogleSidebar } = useSidebar();
const { settings, menu } = storeToRefs(useSidebar());
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
