# VACATION TRACKER APP

ABOUT PAGE
```
<template>
	<br />
	<h3>Why use our tracker?</h3>
	<br />
	<p class="about">
		Welcome to our vacation tracker app! Our app is designed to help you easily
		keep track of your vacation time and make the most of your time off. With
		our app, you can quickly and easily input your vacation time, view your
		remaining days, and plan your upcoming trips. Whether you're looking to take
		a long-awaited vacation or simply need a day off, our app makes it easy to
		manage your time off and stay organized. With intuitive features and
		user-friendly design, our app is the perfect tool for busy professionals,
		students, and anyone who wants to make the most of their vacation time. So
		why wait? Download our app today and start planning your next adventure!
	</p>
</template>
```

ADD TRIP COMPONENT
```
<template>
	<form class="add-form">
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
```

TRIP COMPONENT
```
<template>
	<div class="trip">
		<h2>
			<i class="fas fa-times delete-btn"></i>
		</h2>
		<p>
			<i class="fas fa-map-marker-alt"></i
			><span class="spacing"></span>
		</p>
		<p>
			<i class="far fa-calendar-alt"></i
			><span class="spacing"></span>
		</p>

		<p class="why-text"></p>
	</div>
</template>
```

TRIPS COMPONENT
```
<template>
	<div class="list"></div>

	<div class="list">
		<h2 class="error">You have no existing trip booked!</h2>
	</div>
</template>
```

INSATLLING FONT AWESOME
```
npm install --save @fortawesome/fontawesome-free
```
```
import '@fortawesome/fontawesome-free/css/all.css'
```
