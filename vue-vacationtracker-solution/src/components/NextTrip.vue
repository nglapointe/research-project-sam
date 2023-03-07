<template>
	<div class="trip-container">
		<div class="info">
			<h2>Your next trip!</h2>

			<br />
			<h4>
				<i class="fas fa-map-marker-alt"></i
				><span class="spacing">{{
					trip && trip.location ? trip.location : '-'
				}}</span>
			</h4>
			<h4>
				<i class="far fa-calendar-alt"></i
				><span class="spacing">{{
					trip && trip.location ? formatDate(trip.day) : '-'
				}}</span>
			</h4>
		</div>
		<div class="timer">
			<p>{{ timeRemaining }}</p>
		</div>
	</div>

	<br /><br />
</template>

<script>
import moment from 'moment';

export default {
	data() {
		return {
			timeRemaining: '',
			timerId: null,
		};
	},
	props: {
		trip: Object,
	},
	methods: {
		formatDate(date) {
			const tripDate = new Date(date);
			tripDate.setDate(tripDate.getDate() + 1);

			const weekday = tripDate.toLocaleString('default', { weekday: 'long' });
			const month = tripDate.toLocaleString('default', { month: 'long' });
			let day = tripDate.toLocaleString('default', { day: 'numeric' });

			if (day.slice(-1) === '1' && day !== '11') {
				day += 'st';
			} else if (day.slice(-1) === '2' && day !== '12') {
				day += 'nd';
			} else if (day.slice(-1) === '3' && day !== '13') {
				day += 'rd';
			} else {
				day += 'th';
			}

			const year = tripDate.getFullYear();
			const formattedDate = `${weekday}, ${month} ${day} ${year}`;
			return formattedDate;
		},
		calculateTimeRemaining() {
			const now = moment();
			const target = moment(this.trip.day);
			const diff = target.diff(now, 'seconds');
			const duration = moment.duration(diff, 'seconds');

			const days = Math.floor(duration.asDays());
			const hours = duration.hours();
			const minutes = duration.minutes();
			const seconds = duration.seconds();

			this.timeRemaining = `${days}d : ${hours}h ${minutes}m ${seconds}s`;
		},
	},
	created() {
		//Check task is defined and make sure day is defined
		if (this.trip != null && !!this.trip.day) {
			//Show timing immediatly after page loads
			this.calculateTimeRemaining();

			this.timerId = setInterval(() => {
				this.calculateTimeRemaining();
			}, 1000);
		}
	},
	watch: {
		trip: {
			handler: function (trip) {
				if (trip === null || trip.day === undefined) {
					clearInterval(this.timerId);
					this.timeRemaining = `0d : 0h 0m 0s`;
				} else {
					this.calculateTimeRemaining();

					//Check to see if a interval is created
					if (this.timerId === null) {
						this.timerId = setInterval(() => {
							this.calculateTimeRemaining();
						}, 1000);
					}
				}
			},
			deep: true,
		},
		beforeDestroy() {
			// clear the timer when component is destroyed
			if (this.timeId !== null) {
				clearInterval(this.timerId);
			}
		},
	},
};
</script>
