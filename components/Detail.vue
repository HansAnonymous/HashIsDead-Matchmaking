<script setup>
const { topic, answer, otherAnswer } = defineProps({
	topic: {
		type: String,
		required: true
	},
	answer: {
		type: String,
		required: true
	},
	otherAnswer: {
		type: String,
		required: true
	}
});

</script>

<template>
<div class="p-2 rounded-md"
	:class="{
		'bg-green-200': answer === otherAnswer,
		'bg-gray-200': answer !== otherAnswer,
		'h-24': topic === 'Pizza Toppings That Are Tasty',
		'h-20': topic === 'Is a Hot Dog a Sandwich?'
	}">
	<h5 class="text-md">
		{{ topic }}
	</h5>
	<p class="text-xs font-light">
		{{ answer !== "" ? answer.split(';').join(', ') : "No Response" }}
	</p>
</div>
</template>