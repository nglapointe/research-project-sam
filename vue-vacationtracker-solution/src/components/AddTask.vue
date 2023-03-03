<template>
	<form @submit="onSubmit" class="add-form">
		<div class="form-control">
			<label>Name</label>
			<input
				type="text"
				v-model="name"
				name="text"
				placeholder="Give a name for this adventure"
			/>
		</div>
		<div class="form-control">
			<label>Where are doing?</label>
			<input
				type="text"
				v-model="location"
				name="day"
				placeholder="Add the location"
			/>
		</div>
		<div class="form-control">
			<label>Why? <span class="optional-tag">*Optional</span></label>
			<input
				type="text"
				v-model="why"
				name="day"
				placeholder="What's the reason for this trip?"
				maxlength="60"
			/>
		</div>
		<div class="form-control">
			<label>When's the trip?</label>
			<input type="date" v-model="day" name="day" />
		</div>
		<div class="form-control form-control-check">
			<label>Do you have a flight booked?</label>
			<input type="checkbox" v-model="bookedFlight" name="reminder" />
		</div>

		<input type="submit" value="Save Trip" class="btn btn-block" />
	</form>
</template>

<script>
export default {
	name: 'AddTask',
	data() {
		return {
			name: '',
			location: '',
			why: '',
			day: '',
			bookedFlight: false,
		};
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();

			if (!this.name) {
				alert('Please add a task');
				return;
			}

			const newTrip = {
				//id: Math.floor(Math.random() * 100),
				name: this.name,
				location: this.location,
				why: this.why,
				day: this.day,
				bookedFlight: this.bookedFlight,
			};

			this.$emit('add-task', newTrip);

			this.name = '';
			this.location = '';
			this.why = '';
			this.day = '';
			this.bookedFlight = false;
		},
	},
};
</script>
