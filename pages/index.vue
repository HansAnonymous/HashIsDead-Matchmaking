<script setup lang="ts">
// Imports
const csvStringToJSON = (csv: string) => {
	const lines = csv.split('\n');
	const result: { [key: string] : string}[] = [];
	const headers = lines[0].split(',');
	for (let i = 1; i < lines.length; i++) {
		const obj: { [key: string]: string } = {};
		
		for (let j = 0; j < headers.length; j++) {
			const currentLine = lines[i].split(',');
			obj[headers[j].trim().replace(/\"/g, '')] = currentLine[j].trim();
		}

		result.push(obj);
	}

	return result;
}

const { data } = await useFetch('/api/data');
const opinions = csvStringToJSON(data.value);

const selectedFirst = reactive({value: opinions[0]});
const updateFirst = (person: {value: string}) => {
	selectedFirst.value = person;
}
const selectedSecond = reactive({value: opinions[1]});
const updateSecond = (person: {value: string}) => {
	selectedSecond.value = person;
}

const score = computed(() => {
	let count = 0;
	Object.keys(selectedFirst.value).forEach((key) => {
		if (key !== "PostStream" && selectedFirst.value[key] === selectedSecond.value[key]) {
			count += 1;
		}
	})
	return count;
});
</script>

<template>
	<div class="bg-[#FFC2C2] pb-12">
		<div class="space-y-2">
			<div class="grid grid-cols-2 gap-2 px-2 mx-auto max-w-3xl">
				<SearchList id="firstSearch" :selectedPerson="selectedFirst" :people="opinions" @change="updateFirst"></SearchList>
				<SearchList id="secondSearch" :selectedPerson="selectedSecond" :people="opinions" @change="updateSecond"></SearchList>
			</div>
			<div class="flex justify-center">
				<p class="bg-red-400 px-12 py-1 rounded-lg text-xl font-bold">
					Matchmaking Score: {{ score }}
				</p>
			</div>
			<div class="grid grid-cols-2 gap-2 px-2 mb-12 mx-auto max-w-3xl">
				<div class="flex flex-col space-y-2">
					<ViewerDetails :viewer="selectedFirst.value" :otherViewer="selectedSecond.value"></ViewerDetails>
				</div>
				<div class="flex flex-col space-y-2">
					<ViewerDetails :viewer="selectedSecond.value" :otherViewer="selectedFirst.value"></ViewerDetails>
				</div>
			</div>
		</div>
	</div>

</template>