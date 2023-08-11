<script setup lang="ts">
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

const selected = reactive({value: opinions[0]});
const updateSelected = (person: {value: string}) => {
	selected.value = person;
}

const filteredPeople = computed(() => {
  const filtered = opinions.filter((person) => {
    return person.TwitchName !== selected.value.TwitchName;
  }).map((person) => {
    let count = 0;
    Object.keys(selected.value).forEach((key) => {
      if (key !== "PostStream" && selected.value[key] === person[key]) {
        count += 1;
      }
    })
    return {
      "TwitchName": person.TwitchName,
      "Nickname": person.Nickname,
      "Score": count
    }
  });
  return filtered;
});

const highestScore = computed(() => {
  return Math.max(...filteredPeople.value.map((person) => person.Score));
})
</script>

<template>
  	<div class="bg-[#FFC2C2] pb-12">
      <div class="px-2 space-y-2">
        <SearchList
          :selectedPerson="selected"
          :people="opinions"
          @change="updateSelected"
          class="md:max-w-5xl mx-auto"/>
        <ul class="grid sm:grid-cols-2 md:grid-cols-3 md:mx-auto md:max-w-5xl lg:grid-cols-4 gap-2">
          <li v-for="person in filteredPeople" :key="person.id"
          class="rounded-md p-2 text-center text-md border-2"
          :class="{
            'bg-green-300 border-green-600': person.Score === highestScore,
            'bg-red-300 border-red-600' : person.Score === 0,
            'bg-orange-300/60 border-orange-600': (person.Score === 1 || person.Score === 2) && person.Score !== highestScore,
            'bg-white border-blue-200': person.Score !== highestScore && person.Score > 2,
          }"
          >
          <p>
            {{ person.TwitchName }} ({{ person.Nickname }})
          </p>
          <p>
            {{ person.Score }}
          </p>
        </li>
      </ul>
    </div>
	</div>
</template>