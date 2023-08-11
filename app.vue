<template>
  <!--
    TODO IMPL: Match 3 Pizza Toppings = Match!
    TODO FIX: Fix dropdown search being duplicated
    TODO FIX: Scores Page Height for background color
    TODO FIX: Scores Page doubles cards after reloading
  -->
  <Head>
    <Title>HashIsDead Matchmaking</Title>
    <Meta name="description" content="HashIsDead's Matchmaking Results" />
  </Head>
  <div class="flex flex-col w-full h-full bg-[#FFC2C2]">
    <Header />
    <NuxtPage />
  </div>
</template>

<style>
html, body, #__nuxt, #__layout {
  width: 100%; height: 100%;
}

*, :after, :before {
  box-sizing: border-box !important;
}

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