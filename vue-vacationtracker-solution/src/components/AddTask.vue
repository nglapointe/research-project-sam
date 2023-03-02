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

<style scoped>
.add-form {
	margin-bottom: 40px;
}
.form-control {
	margin: 20px 0;
}
.form-control label {
	display: block;
}
.form-control input {
	width: 100%;
	height: 40px;
	margin: 5px;
	padding: 3px 7px;
	font-size: 17px;
}
.form-control-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.form-control-check label {
	flex: 10;
}

.form-control-check input {
	flex: 2;
	height: 20px;
}

label {
	font-weight: 900;
}

.optional-tag {
	font-size: 0.9em;
	color: red;
	font-weight: bold;
}
</style>
