<template>
	<div v-if="trips.length > 0" class="list">
		<div :key="trip.id" v-for="trip in trips">
			<Trip
				@toggle-bookedFlight="$emit('toggle-bookedFlight', trip.id)"
				@delete-trip="$emit('delete-trip', trip.id)"
				:trip="trip"
			/>
		</div>
	</div>

	<div v-else class="list">
		<h2 class="error">You have no existing trip booked!</h2>
	</div>
</template>

<script>
import Trip from './Trip';

export default {
	name: 'Trips',
	props: {
		trips: Array,
	},
	components: {
		Trip,
	},
	emits: ['delete-trip', 'toggle-bookedFlight'],
};
</script>
