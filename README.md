# SEI50 Project - ***Reactathon***

## Application Outline
The application is an edible plant index allowing users to search by common and scientific names along with other attributes.

## Project Brief
Collaborate remotely with one teammate to pair code a React application that consumes a public RestAPI. Project must be planned and completed within 36 hours.

## Technologies Used
* JavaScript
* React
* react-router-dom
* Axios
* Heroku cors-anywhere
* SCSS
* Bulma
* react-responsive-carousel
* Insomnia

## API - Trefle.io
Trefle is an open API providing botanical information for over 1 million plants.

## Process
With limited time, we decided on a straightforward layout page to index the initial results, with the goal of including several ways to filter them. Given the massive amount of data available from Trefle, we quickly opted to focus on edible plants. In the initial half of the allotted time, we struggled to work around issues arising from our API requests and CORS. Ultimately, we utilized the cors-anywhere proxy from Heroku.

Athough the time spent working on that issue significantly impacted our initial plans, we successfully created a search option and added in a few extra features to add substance to the app. The response data provided page numbers with links which allowed us to paginate the results for a user and include navigation buttons below the listed results.

<div align='center'>
  <img src='./images/page.jpg'>
</div>

The react-responsive-carousel component allowed us to quickly implement an image carousel for a user when viewing its details.

<div align='center'>
  <img src='./images/show.jpg'>
</div>

## Challenges, Bugs & Future Considerations

For the time being, this project is likely to remain as is while I focus on additional full stack projects. As mentioned, we used a significant amount of our allotted time working around the CORS issue and then navigating the data we were able to pull to make it manageable and useful to a user. There are formatting related issues I would correct related to both the index, pagination and the plant detail page if I were to return to this project. In addition, we would like to have added additional filtering capabilities as well as more information provided on a given plant.

