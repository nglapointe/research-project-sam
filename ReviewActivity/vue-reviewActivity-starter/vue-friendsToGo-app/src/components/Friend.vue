<template>
	<div class="user-container">
		<!--You need to emit a custom event to delete the friend from the list-->
		<i class="fas fa-times"></i>

		<!--
			Similiar to the User Component, display the friends information needed with the
			friend object below.
		-->
		<img :class="``" v-bind:src="``" :alt="``" />
		<h4><!--Full Name--></h4>
		<br /><br />

		<div class="friend-info">
			<table>
				<tr>
					<th>Location:</th>
					<td></td>
				</tr>
				<tr>
					<th>Age:</th>
					<td></td>
				</tr>
				<tr>
					<th>Email:</th>
					<td></td>
				</tr>
				<tr>
					<th>Phone:</th>
					<td></td>
				</tr>
			</table>
		</div>

		<br /><br /><br />
	</div>
</template>

<script>
/*
	TODO:
	This is very simple, do what is needed to get a friend object for this component. You will use that
	to display the friend information onto the card.
*/
</script>
