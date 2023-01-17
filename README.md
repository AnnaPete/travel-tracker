# Travel-Tracker

## Introduction
The primary goal of [Travel Tracker](https://github.com/AnnaPete/travel-tracker) is to help travelers plan their future trips as well as keep track of upcoming, current, and past vacations. A traveler can see the amount they have spent so far this year as well as create a new trip from a curated list of locations. Once the trip information has been entered into the planning form, the traveler can see the estimated total (including fees) for all travelers over the given timeframe and can add the trip to their pending list.


## Motivation
The motivation behind this project was to get more experience working with servers and API's, as well as providing the instructors with a more accurate feel for my personal skill level at this point in the course.


## Technologies
JavaScript, Fetch, JSON, Mocha, Chai, HTML, CSS/SCSS, Normalize, Webpack


### Traveler Dashboard
When a traveler visits their dashboard, they will see a welcome message with their name, as well as the amounts they've spent on trips for the previous year and this year. The user will also be able to see a form for creating a new trip, as well as all of their previous, current, and pending trips.

<img width="1899" alt="Travel-Tracker Traveler Dashboard" src="https://user-images.githubusercontent.com/107816053/212961201-a42d067a-ac88-4fd1-ad76-4e4f044f8252.png">


### Login Screen
When the website is first loaded, a user will see the login screen below with pre-filled input fields for ease of use.

<img width="1899" alt="Travel-Tracker Login Screen" src="https://user-images.githubusercontent.com/107816053/212961758-9292dafe-9f9b-4440-b3f1-26ac6d04c553.png">


<details>
  <Summary>Under the Hood</summary>
  The values for the username and password are used to populate the dashboards for the traveler and agent but are not actually authenticated in any way. The traveler username of <code>traveler25</code> means that the user with the ID of 25 will be retrieved from the Traveler API and will be used to populate the dashboard information.
</details>


## Continuous Improvement
Next steps for this website would likely include improving the visuals. At this point in the curriculum, we've been exposed to CSS and SCSS but haven't been exposed to React yet. It would be nice to build out the website to look more like a "real" website.

Additionally, it would be nice to allow a traveler to edit a pending trip and / or receive feedback when a trip is approved or deleted by an agent.

I started to incorporate agent functionality, but had to put it to the side until I had the basic functionality working. I ran out of time for the project itself, but I am going to spend some time after the evaluation to optimize the visuals and add in the agent functionality.


## Installation Instructions

This application requires a local server to be running independent of GitHub pages. Clone [this repository](git@github.com:turingschool-examples/travel-tracker-api.git) and follow the instructions included in the ReadMe to install and start the API. Once the server is running on your local machine, the site can be visited by entering these commands into the Terminal once you've cloned down [the project repository](git@github.com:AnnaPete/travel-tracker.git) and entered the directory: <code>npm install</code><br>
<code>npm start</code>

## Author

Anna Peterson: <br>
[GitHub](https://github.com/AnnaPete)<br>
[LinkedIn](https://www.linkedin.com/in/anna-peterson-0a0662249/)<br>
