<template>
	<div
		@dblclick="$emit('toggle-bookedFlight', trip.id)"
		:class="[trip.bookedFlight ? 'bookedFlight' : '', 'trip']"
	>
		<h2>
			{{ trip.name }}
			<i @click="$emit('delete-trip')" class="fas fa-times delete-btn"></i>
		</h2>
		<p>
			<i class="fas fa-map-marker-alt"></i
			><span class="spacing">{{ trip.location }}</span>
		</p>
		<p>
			<i class="far fa-calendar-alt"></i
			><span class="spacing">{{ trip.day }}</span>
		</p>

		<p class="why-text">{{ trip.why }}</p>
	</div>
</template>

<script>
export default {
	name: 'Trip',
	props: {
		trip: Object,
	},
};
</script>
