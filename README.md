# SEI50 Project - ***Reactathon***

## Application Outline
The application is an edible plant index allowing users to search by common and scientific names along with other attributes.

[Deployed App](https://sei-project-2-dg.netlify.app/)

## Project Brief
Collaborate remotely with one teammate to pair code a React application that consumes a public REST API. Project must be planned and completed within 36 hours.

## Technologies Used
* JavaScript
* React
* React-router-dom
* Axios
* Heroku cors-anywhere
* SCSS
* Bulma
* React-responsive-carousel
* Insomnia
* Netlify

## API - Trefle.io
Trefle is an open API providing botanical information for over 1 million plants.

## Process
With limited time, we decided on a straightforward layout page to index the initial results, with the goal of including several ways to filter them. Given the massive amount of data available from Trefle, we quickly opted to focus on edible plants. In the initial half of the allotted time, we struggled to work around issues arising from our API requests and CORS. Ultimately, we utilized the cors-anywhere proxy from Heroku.

Athough the time spent working on that issue significantly impacted our initial plans, we successfully created a search option and added in a few extra features to add substance to the app. The response data provided page numbers with links which allowed us to paginate the results for a user and include navigation buttons below the listed results.

<div align='center'>
  <img src='./images/page.jpg'>
</div>

The Trefle API provides a significant amount of data on each plant, with information nested in several ways. In hopes of creating a carousel feature, we needed to access an array of Trefle client provided photos. The snippet below shows the code we wrote in order to retrieve  the images.

```javascript
componentDidMount = async () => {
    const slug = this.props.match.params.slug
    const plant = await getSinglePlant(slug)
    const flowerArray = []
    for (let index = 0 ; index < plant.data.data.main_species.images.flower.length; index++) {
      flowerArray.push(plant.data.data.main_species.images.flower[index].image_url)
    }
    this.setState({ plant: plant.data.data, flowerArray })
  }
```

With that set, the react-responsive-carousel component allowed us to quickly implement a functional display for a user when viewing a plant's details.

<div align='center'>
  <img src='./images/show.jpg'>
</div>

## Challenges, Bugs & Future Considerations

For the time being, this project is likely to remain as is while I focus on additional full stack projects. As mentioned, we used a significant amount of our allotted time working around the CORS issue and then navigating the data we were able to pull to make it manageable and useful to a user. There are formatting related issues we would correct related to both the index, pagination and the plant detail page if we were to return to this project. In addition, we would like to have added additional filtering capabilities as well as more information provided on a given plant.

## Key Takeaways

My biggest takeaway from this exercise isn't something I can capture in a code snippet. This was a short time-frame assignment, and we hit roadblocks immediately with CORS issues in our requests to Trefle.io. In addition, the documentation in some cases was not up to date, and the data returned was bulky and a bit unwieldy for us at first. I was quite frustrated and anxious about what seemed like a lack of progress as the allotted time passed. My partner was very diligent and patient, and eventually we were able to successfully retrieve and work with the data. One thing she said in our presentation session was how much she enjoyed the obstacle because of the opportunity to learn more in that area while troubleshooting. That was a massive realization for me. I have thought of that comment nearly every time I get stuck now, especially on things beyond the scope of what I have learned. This has really helped me approach bugs and obstacles in more positive way.
