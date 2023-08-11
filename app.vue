<script setup lang="ts">
const description = ref("HashIsDead's Matchmaking Results");
</script>

<template>
  <!--
    TODO IMPL: Match 3 Pizza Toppings = Match!
    TODO IMPL: Change Lowest Score Background
    TODO IMPL: Change 1/2 Scores Background to Orange
    TODO FIX: Fix dropdown search being duplicated
    TODO FIX: Scores Page Height for background color
    TODO FIX: Scores Page doubles cards after reloading
  -->
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