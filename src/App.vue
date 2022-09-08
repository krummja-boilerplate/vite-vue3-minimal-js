<script setup>
const route = useRoute()
</script>

<template lang="pug">
//- router-view
router-view.content(v-slot="{ Component }")
  transition(mode="out-in" name="fade")
    component(:is="Component" :key="route.fullPath")
</template>

<style scoped>
.nav {
  padding-top: 16px;
  margin-bottom: 36px;
}

.nav ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
}

@media (min-width: 550px) {
  .nav ul {
    flex-direction: row;
    width: calc(var(--body-width) / 3);

    justify-content: space-between;
    padding: 0;
  }
}

.nav li {
  list-style: none;
}
</style>
