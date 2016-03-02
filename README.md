**food.**
- [x] **User can search for reviews.**
  * [x] Search and return tag matches
  * [x] Clear search results if new search is initiated
- [x] **User can view a list of reviews.**
  * [x] Click search result to show restaurant details
  * [x] Show list of reviews under restaurant details
- [x] **User can add a review.**
  * [x] Fill out form and submit to push input into review array
  * [x] Update review list to show user review

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
