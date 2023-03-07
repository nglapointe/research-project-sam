<template>
	<AddTrip v-if="showAddTrip" @add-trip="addTrip" />
	<NextTrip v-else :trip="nextTrip ? nextTrip : null" />

	<Trips
		@toggle-bookedFlight="toggleBookedFlight"
		@delete-trip="deleteTrip"
		:trips="trips"
	/>
</template>

<script>
import Trips from '../components/Trips';
import AddTrip from '../components/AddTrip';
import NextTrip from '../components/NextTrip';

export default {
	name: 'Home',
	props: {
		showAddTrip: Boolean,
	},
	components: {
		Trips,
		AddTrip,
		NextTrip,
	},
	data() {
		return {
			trips: [],
			nextTrip: Object,
		};
	},
	methods: {
		async addTrip(newTrip) {
			const res = await fetch('http://localhost:5000/trips', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newTrip),
			});

			const data = await res.json();

			this.trips = [...this.trips, data];
			this.trips.sort((a, b) => new Date(a.day) - new Date(b.day));

			//Set the next trip
			this.setNextTripObject(this.trips, new Date());
		},
		async deleteTrip(id) {
			if (confirm('Are you sure you want to delete this trip?')) {
				const res = await fetch(`http://localhost:5000/trips/${id}`, {
					method: 'DELETE',
				});

				if (res.status === 200) {
					this.trips = this.trips.filter((trip) => trip.id !== id);

					await this.fetchTrips();
				} else {
					alert('Error deleting task');
				}
			}
		},
		async toggleBookedFlight(id) {
			const tripToToggle = await this.fetchTrip(id);
			const updTrip = {
				...tripToToggle,
				bookedFlight: !tripToToggle.bookedFlight,
			};

			const res = await fetch(`http://localhost:5000/trips/${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(updTrip),
			});

			const data = await res.json();

			this.trips = this.trips.map((task) =>
				task.id === id ? { ...task, bookedFlight: data.bookedFlight } : task
			);
		},
		async fetchTrips() {
			const res = await fetch('http://localhost:5000/trips');
			const data = await res.json();

			data.sort((a, b) => new Date(a.day) - new Date(b.day));
			this.setNextTripObject(data, new Date());

			return data;
		},
		async fetchTrip(id) {
			const res = await fetch(`http://localhost:5000/trips/${id}`);
			const data = await res.json();

			return data;
		},
		async deleteExpiredTrips() {
			const now = new Date();
			now.setHours(0, 0, 0, 0); // Set the time component to 00:00:00:000
			const expiredTrips = this.trips.filter((trip) => {
				const tripDate = new Date(trip.day);
				tripDate.setDate(tripDate.getDate() + 1);
				tripDate.setHours(0, 0, 0, 0); // Set the time component to 00:00:00:000
				return tripDate <= now;
			});

			for (const trip of expiredTrips) {
				const res = await fetch(`http://localhost:5000/trips/${trip.id}`, {
					method: 'DELETE',
				});
				if (res.status === 200) {
					this.trips = this.trips.filter((t) => t.id !== trip.id);
				} else {
					console.log(`Error deleting trip with id ${trip.id}`);
				}
			}
		},
		setNextTripObject(data, currentDate) {
			const closestTrip = data.find((trip) => new Date(trip.day) > currentDate);
			this.nextTrip = closestTrip;
		},
	},
	async created() {
		this.trips = await this.fetchTrips();

		setInterval(() => {
			this.deleteExpiredTrips();
		}, 1000);
	},
};
</script>
