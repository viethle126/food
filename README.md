**food.**
- [x] **User can search for reviews.**
  * [x] Search to return a list of tag matches
  * [x] Sort search results by AZ, ZA or rating (desc or asc)
- [x] **User can view a list of reviews.**
  * [x] Click on any search result to show restaurant details and reviews
  * [x] Sort reviews by date or rating (desc or asc)
  * [x] 'Upvote' reviews that are useful, funny or cool
- [x] **User can add a review.**
  * [x] Rate a restaurant using stars to affect it's rating
  * [x] Fill out form and submit to add a new review
- [x] **User can add a new location**
  * [x] Add a new location by filling out a form

Data structure for restaurants:
```javascript
var restaurant = {
  burgerbar {
    reference: 'burgerbar',
    name: 'Burger Bar',
    number: '714-555-5555',
    address: ['street','city','state','zip code'],
    hours: {
      monday: ['7:00 am to 2:00 pm', '6:00pm - 11:00 pm'],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    },
    tags: ['burgers','lunch','dinner','restaurant'],
    images: ['images/burgerbar/img001.jpg','images/burgerbar/img002.jpg','images/burgerbar/img003.jpg'],
    reviews: [
      {
      name: 'Bob Eats',
      date: '02/28/16',
      rating: 10,
      review: 'long review string'
      }
    ]
  }
}
```
