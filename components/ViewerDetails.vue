<script setup>
const { viewer, otherViewer } = defineProps({
	viewer: {
		type: Object,
		required: true
	},
	otherViewer: {
		type: Object,
		required: true
	}
});
</script>

<template>
	<div
		class="flex flex-col w-full h-full bg-white rounded-md p-2 space-y-2">
		<p class="text-xs font-medium">
			<a :href="'https://twitch.tv/' + viewer.TwitchName"
				target="_blank"
				rel="noreferrer"
				class="text-blue-500 hover:underline"
			>
				{{  viewer.TwitchName }}
			</a>
			<span
				v-if="viewer.PostStream === 'TRUE'"
				class="text-xxs text-red-400 font-medium float-right align-text-top"
			>
				Viewer submitted post-stream!
			</span>
		</p>
		<h4 class="text-lg font-bold">
			Responses
		</h4>
		<Detail topic="Favorite Dinosaur" :answer="viewer.FavoriteDinosaur" :otherAnswer="otherViewer.FavoriteDinosaur" />
		<Detail topic="Favorite Planet" :answer="viewer.FavoritePlanet" :otherAnswer="otherViewer.FavoritePlanet" />
		<Detail topic="2 Stacked Lasagnas = ?" :answer="viewer.Lasagna" :otherAnswer="otherViewer.Lasagna" />
		<Detail topic="Favorite Ice Cream" :answer="viewer.FavoriteIceCream" :otherAnswer="otherViewer.FavoriteIceCream" />
		<Detail topic="Pizza Toppings That Are Tasty" :answer="viewer.PizzaToppings" :otherAnswer="otherViewer.PizzaToppings" />
		<Detail topic="Is a Hot Dog a Sandwich?" :answer="viewer.HotDog" :otherAnswer="otherViewer.HotDog" />
		<Detail topic="Favorite Bloons Tower Defense Monkey" :answer="viewer.BTD" :otherAnswer="otherViewer.BTD" />
		<Detail topic='Favorite of "The Boys"' :answer="viewer.Boys" :otherAnswer="otherViewer.Boys" />
		<Detail topic="Resident of Time Prism?" :answer="viewer.TimePrison" :otherAnswer="otherViewer.TimePrison" />
		<Detail topic="Favorite Hash Multiplayer Game" :answer="viewer.HashGame" :otherAnswer="otherViewer.HashGame" />
		<Detail topic="Can Hash Fight a Giraffe?" :answer="viewer.Giraffe" :otherAnswer="otherViewer.Giraffe" />
	</div>
</template>

<style scoped>
</style>