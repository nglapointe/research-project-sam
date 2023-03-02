<template>
	<div class="trip-container">
		<div class="left">
			<h2>Your next trip!</h2>

			<br />
			<h4>
				<i class="fas fa-map-marker-alt"></i
				><span class="spacing">{{ task.location }}</span>
			</h4>
			<h4>
				<i class="far fa-calendar-alt"></i
				><span class="spacing">{{ formatDate(task.day) }}</span>
			</h4>
		</div>
		<div class="right">
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
			targetDate: '2023-03-15', // replace with your target date
			timeRemaining: '',
		};
	},
	props: {
		task: Object,
	},
	methods: {
		formatDate(date) {
			const tripDate = new Date(date);
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
	},
	created() {
		setInterval(() => {
			const now = moment();
			const target = moment(this.task.day);
			const diff = target.diff(now, 'seconds');
			const duration = moment.duration(diff, 'seconds');
			this.timeRemaining = moment
				.utc(duration.asMilliseconds())
				.format('HH:mm:ss');
		}, 1000);
	},
};
</script>

<style scoped>
h3 {
	color: green;
}

.trip-container {
	border-left: solid #000 1px;
	padding-left: 5%;
	height: auto;

	display: flex;
	flex-direction: row;
}

.right {
	margin: 0 auto;
	padding-top: 9%;
	font-size: 1.75em;
	font-weight: 900;
	flex: 3;
}

.left {
	flex: 7;
}

.spacing {
	padding-left: 3%;
}
</style>
