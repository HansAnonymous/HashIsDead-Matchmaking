<script setup>
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/vue/20/solid';
const props = defineProps({
	selectedPerson: {
		type: Object,
		required: true
	},
	people: {
		type: Array,
		required: true
	}
});
const $emit = defineEmits(['change']);

const selectedPerson = reactive({value: props.selectedPerson.value});
const people = props.people;

const query = ref('');

let filteredPeople = computed(() =>
	query.value === ''
		? people
		: people.filter((person) =>
			person.Nickname
				.toLowerCase()
				.replace(/\s+/g, '')
				.includes(query.value.toLowerCase().replace(/\s+/g, ''))
	)
);

const onUpdate = (value) => {
	$emit('change', value);
	selectedPerson.value = value;
}
</script>

<template>
	<Combobox v-model="selectedPerson.value" @update:model-value="onUpdate">
		<div class="relative mt-1">
			<div class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#B80000] sm:text-sm">
				<ComboboxInput
					class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 ring-[#B80000] focus:ring-0 rounded-lg"
					:displayValue="(selectedPerson) => selectedPerson.Nickname"
					@change="query = $event.target.value"
				/>
				<ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
					<ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
				</ComboboxButton>
			</div>
			<TransitionRoot
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				@after-leave="query = ''">
				<ComboboxOptions class="combobox absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
					<div
						v-if="filteredPeople.length === 0 && query !== ''"
						class="relative cursor-default select-none py-2 px-4 text-gray-700">
						Nothing found.
					</div>
					<ComboboxOption
						v-for="person in filteredPeople"
						as="template"
						:key="person.id"
						:value="person"
						v-slot="{ selected, active }"
					>
						<li
							class="relative cursor-default select-none rounded-md mx-1 py-2 pl-10 pr-4"
							:class="{
								'bg-[#FF4747] text-white': active,
								'text-gray-900': !active,
							}"
						>
						<span
							class="block truncate"
							:class="{ 'font-medium': selected, 'font-normal': !selected }"
						>
							{{ person.Nickname }}
						</span>
						<span
							v-if="selected"
							class="absolute inset-y-0 left-0 flex items-center pl-3"
							:class="{ 'text-white': active, 'text-teal-600': !active }"
							>
								<CheckIcon class="h-5 w-5" aria-hidden="true" />
							</span>
						</li>
					</ComboboxOption>
				</ComboboxOptions>
			</TransitionRoot>
		</div>
	</Combobox>
</template>

<style scoped>
.combobox::-webkit-scrollbar {
	width: 10px;
}

.combobox::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 10px;
}

.combobox::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 10px;
}
</style>