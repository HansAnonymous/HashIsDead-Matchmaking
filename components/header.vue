<template>
	<div class="grid grid-cols-[1fr_auto] gap-2 p-2">
		<div class="grid grid-cols-[auto_1fr] gap-4 p-2 rounded-lg bg-white">
			<a href="https://twitch.tv/HashIsDead" target="_blank" rel="noreferrer">
				<img
					class="rounded-lg hover:rounded-xl hover:scale-95 transition-all"
					src="~/assets/img/hashisdead.png"
					width="40"
					alt="HashIsDead" />
			</a>
			<div class="flex items-center space-x-2">
				<NuxtLink
					to="/"
					class="rounded-lg transition-all py-2 px-6 bg-gray-300 hover:bg-[#FF4747] border-2 hover:border-2 hover:border-[#B80000]">
					Home
				</NuxtLink>
				<NuxtLink
					to="/scores"
					class="rounded-lg transition-all py-2 px-6 bg-gray-300 hover:bg-[#FF4747] border-2 hover:border-2 hover:border-[#B80000]">
					Scores
				</NuxtLink>
			</div>
		</div>
		<div class="flex w-48 p-2 rounded-lg bg-gray-900 text-white items-center justify-center select-none">
			Made with 💖 by Hans	
		</div>
	</div>
</template>