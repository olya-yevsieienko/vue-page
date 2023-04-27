<template>
  <div class="app">
    <page-layout />
  </div>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --page-bgr: #F5F6F8;
  --main-text: #3B434E;
  --secondary-text: #787D85;
  --search: #A4A4A4;
  --border: #DFDFDF;
  --violet: #7653FC;
  --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  --border-radius: 5px;
}

@font-face {
  font-family: "NanoSans";
  src: local("NanoSans"),
   url('/src/assets/fonts/NotoSans.ttf') format("truetype");
}

.app {
  font-family: 'NanoSans', sans-serif;
  font-size: 14px;
  color: var(--main-text);
  background: var(--page-bgr);
}
</style>
