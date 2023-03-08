# Instruction - FriendsToGo Application

A starter has been provided with most of the code finished. There are ToDo tags all over the application that must be done. Follow the list of instructions below to go throught the code at a certain order and get information about a certain section. This might seem alot to do, but only some of the logic and template syntax is missing, you just need to fix. You can do it how you want, you'll probably end up doing steps before it was said in the instructions. There's a lot of ways to tackle this. Make sure to use the Vacation Tracker Demo as a reference. Have fun!!

#### Random User API

For this review, we will be using the random user api. This is one I am generating random users to display. The only you need to do is use this http request ``` 'https://randomuser.me/api' ``` when trying to fetch new users. Similer to what we did fetch the json file.

## Step 1 - Header Component / App Component / Routing

### Fix the Header Component

Look into the Header component and read the todo. Simply finish the script block that retrieves the title as a string data type. Make sure to display the title into the page.

### Finish the App Component

Once you have completed the Header Component, move along to the App Component. Do what is needed to display the Header as a Child Component.

### Routing

This application has routing enabled and completed for you. The user is able to travel to the 'Home' and 'Friends' page. Modify the Header Conmponent to have the nav bar nagivate the user to the correct page. Look into the index.js file inside the router folder for the information needed to complete this step.

## Step 2 - Button Component

Complete the Button Component, which is able to be reusable throught the application. Read the comment carefully to get some of the code. Make sure you handle the click event from the button. 

Hint: Custom event using the $emit() method.

## Step 3 - Users and User Component

### User Component

Most of the template and logic is completed. You need to complete the form with the so its functional and display the users information on the card. You can use the video as a reference.

NOTE: For the color border of the profile picture, CSS has been implemented. You simply need to pass in the gender propertie of the user and the CSS will do the rest.

The add friend button is present here, and you need to pass along the clicked user information back to the parent component. Emit a custom event to the parent component with the user as an event argument. The new friend object should look like one below, simply add the values. For this activity, make sure you use the form.

```
const friend = {
		firstName: 
		lastName: 
		gender: 
		country: 
		email: 
		age: 
		phone:
		photo: 
};
```

### Users Component

Once you have completed the User Component, you will need to use that to display a list of them within the Users Component. Use a directive that will loop through each user to display each User Component (Card) onto the browser.

You will need to handle a event coming from the Child Component when adding a specific user as a friend.

## Step 4 - Friend and Friends Component

### Friend Component

This should be very similiar to the User Component, you need to display the corresponding information of the friend. You can use the video as a reference.

You will also need to add a custom event to delete the friend from the list and db file. Friend, Friends, and Home View will be needed to complete this.

### Friends Component

This should be very similiar to the Users Component, you need to use a directive to loop through each friend from the db. Each friend should be displayed on the browser using the Friend Component. You'll need to handle the event from the Friend Component.

## Step 5 - Home View and ViewFriends View

### Home View

Most of the code of the Home View should be completed from the other steps. If not, complete what is needed to have the "Home" page working as expected. Make sure the correct message appears under the input and button.

Make sure to have the validation inside the getUsers() methods. You are only able to fecth 1 -15 users to display inside the Users Component. Watch the video to see how it's suppossed to look like.

### View Friend View

It's possible that most of the code for this done when reaching to this point. If not, make sure to have all the code completed and working.


## YOU HAVE COMPLETED THIS REVIEW!!! Not to hard right :D





