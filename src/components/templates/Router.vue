<script setup>
const props = defineProps({
  route: {
    type: String,
    default: '',
  }
});
</script>

<template lang="pug">
div
  router-view(v-slot="{ Component }")
    component(:is="Component" :route="props.route")
</template>
