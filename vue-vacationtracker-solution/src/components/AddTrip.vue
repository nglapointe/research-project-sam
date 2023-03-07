<template>
	<form @submit="onSubmit" class="add-form">
		<p class="error">
			{{ this.errorMsg != '' ? 'ERROR: ' + this.errorMsg : null }}
		</p>

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
	name: 'AddTrip',
	data() {
		return {
			name: '',
			location: '',
			why: '',
			day: '',
			bookedFlight: false,

			errorMsg: '',
		};
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();

			this.validateForm();
			if (this.errorMsg != '') {
				return;
			}

			const newTrip = {
				name: this.name,
				location: this.location,
				why: this.why ? this.why : undefined,
				day: this.day,
				bookedFlight: this.bookedFlight,
			};

			this.$emit('add-trip', newTrip);
			this.resetForm();
		},
		validateForm() {
			if (!this.name) {
				this.errorMsg = 'Enter a name for the trip';
				return;
			}

			if (!this.location) {
				this.errorMsg = 'Enter a location for the trip';
				return;
			}

			//Date Validation
			if (!this.day) {
				this.errorMsg = 'Please enter a date for the trip';
				return;
			}

			if (new Date(this.day) <= new Date()) {
				this.errorMsg = 'Date cannot be today or in the past';
				return;
			}

			this.errorMsg = '';
		},
		resetForm() {
			this.name = '';
			this.location = '';
			this.why = '';
			this.day = '';
			this.bookedFlight = false;
		},
	},
};
</script>
