<template>
  <NuxtLayout>
    <UiPage>
      <div
        class="bg-cyan-400 h-full rounded-lg flex flex-col items-center justify-center"
      >
        <FileUpload url="/api/protected/keepass/upload" />
      </div>
    </UiPage>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>
