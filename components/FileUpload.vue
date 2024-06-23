<template>
  <UiButton>Upload</UiButton>
  <input
    type="file"
    @input="handleFileInput"
  />
  <button @click="submitAsync">submit</button>
</template>

<script setup lang="ts">
const props = defineProps({
  url: String,
});

const { handleFileInput, files } = useFileStorage();

const submitAsync = async () => {
  if (props.url) {
    await $fetch(props.url, {
      method: 'POST',
      body: {
        files: files.value,
      },
    });
  }
};
</script>
