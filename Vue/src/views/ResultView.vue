<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
const token = ref<string | null>(null);
const email = ref<string | null>(null);
const name = ref<string | null>(null);

onMounted(() => {
    token.value = localStorage.getItem("token");
    name.value = localStorage.getItem("name");
    email.value = localStorage.getItem("email");

    console.log(token.value, name.value, email.value);
});
</script>

<template>
    <div v-if="token">
      <h1>Name : {{ name }}</h1>
      <h2>Email : {{ email }}</h2>
      <p>Token : {{ token }}</p>
    </div>
    <div v-else>
      <h1>Data not available.</h1>
    </div>
  </template>
