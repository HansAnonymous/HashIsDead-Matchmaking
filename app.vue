<script setup lang="ts">
const description = ref("HashIsDead's Matchmaking Results");
</script>

<template>
  <div class="flex flex-col w-full h-full bg-[#FFC2C2]">
    <Head>
      <title>HashIsDead Matchmaking</title>
      <Meta name="description" :content="description" />
      <Style type="text/css" children="html, body, #__nuxt, #__layout { width: 100%; height: 100%; } *, :after, :before { box-sizing: border-box !important;}" />
    </Head>
    <Header />
    <NuxtPage />
  </div>
</template>

<style>
::-webkit-scrollbar {
	display: none;
}
.router-link-active {
  color: #FF4747;
  border-color: #FF4747;
  background-color: rgb(224 228 234);
}
.router-link-active:hover {
  color: #000;
}
</style>