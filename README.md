food.
1. User can search for reviews:
	User search will initiate a loop to go through each restaurants' tags and return matches.
2. User can view a list of reviews:
	Clicking on a restaurant will call a list of that restaurant's reviews. Each review will be appended to an <ul> element as a <li> element.
3. User can add a review:
	Writing and submitting a review will create a new object under a restaurant's review object with the properties name, date, rating and review.

Notes: I am putting the hours into an array because some restaurants will open for lunch, close for a few hours and re-open for dinner. [07001500, 18002300] is read as: 7am-3pm, 6pm-11pm.

Data structure outline for restaurants:

restaurant{}
	burgerbar{}
		name: 'Burger Bar'
		number: '714-555-5555'
		address: ['street','city','state','zip code']
		hours{}
			monday: [07001500, 18002300]
			tuesday: []
			wednesday: []
			thursday: []
			friday: []
			saturday: []
			sunday: []
		tags: ['burgers','lunch','dinner','restaurant']
		images: ['images/burgerbar/img001.jpg','images/burgerbar/img002.jpg','images/burgerbar/img003.jpg']
		reviews{}
			1(NUMBER){}
				name: 'Bob Eats'
				date: '022816'
				review: 'long review string here blah blah blah'
		reviews[]
			['Bob Eats','022816','long review string here blah blah blah'],
			[],
			[],
Still thinking about just using an array for the reviews so user reviews can be pushed into it
