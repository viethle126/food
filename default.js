// each restaurant is created as an object within the object restaurant
var restaurant = {
  // add restaurant Mogi Tacos
  mogitacos: {
		reference: 'mogitacos',
    name: 'Mogi Tacos',
    number: '714-824-2817',
    address: ['1726 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['Closed'],
      tuesday: ['10:00 am - 4:00 pm'],
      wednesday: ['10:00 am - 4:00 pm'],
      thursday: ['10:00 am - 4:00 pm'],
      friday: ['10:00 am - 4:00 pm'],
      saturday: ['10:00 am - 4:00 pm'],
      sunday: ['10:00 am - 4:00 pm']
    },
    good: 'lunch, burritos, tacos',
    tags: ['mogi','lunch','burritos','burrito','tacos','taco','food'],
    images: ['images/mogitacos/img001.jpg','images/mogitacos/img002.jpg','images/mogitacos/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
			{
      	username: 'Fat Joe',
        date: '2/10/2016',
				rating: 5,
        review: 'They have the best tacos in the OC! Try the short rib tacos or the spicy pork wet burrito. You might have to take a nap after but it\'s worth it!',
        useful: 3,
        funny: 3,
        cool: 3
      },
      {
        username: 'Sandra T',
        date: '2/13/2016',
				rating: 3,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.',
        useful: 0,
        funny: 0,
        cool: 0
      },
      {
        username: 'Wendy Eats',
        date: '3/2/2016',
				rating: 4,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the spicy pork burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!',
        useful: 0,
        funny: 1,
        cool: 1
      }
    ]
  },
	// add restaurant Santana
  santana: {
		reference: 'santana',
    name: 'Santana',
    number: '714-623-2674',
    address: ['100 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['11:00 am - 3:00 pm'],
      tuesday: ['11:00 am - 3:00 pm'],
      wednesday: ['11:00 am - 3:00 pm'],
      thursday: ['11:00 am - 3:00 pm'],
      friday: ['11:00 am - 3:00 pm'],
      saturday: ['11:00 am - 3:00 pm'],
      sunday: ['Closed']
    },
    good: 'lunch, burritos, tacos',
    tags: ['santana','lunch','burritos','burrito','tacos','taco','food'],
    images: ['images/santana/img001.jpg','images/santana/img002.jpg','images/santana/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'ocEats',
        date: '1/23/2016',
				rating: 4,
        review: 'They have the best burritos in the OC! Try the lengua tacos or the carnitas wet burrito. You might have to take a nap after but it\'s worth it!',
        useful: 1,
        funny: 1,
        cool: 2
      },
      {
        username: 'I hate vegetarians',
        date: '2/1/2016',
				rating: 3,
        review: 'I\'ve been wanting to try this place for a long time. The boyfriend finally took me and... It was okay - overhyped for sure. The flavors were good but the meat was a little dry. I\'d be willing to give it another try.',
        useful: 2,
        funny: 0,
        cool: 0
      },
      {
        username: 'sweetguy2201',
        date: '2/2/2016',
				rating: 4,
        review: 'Fantastic food. Place was packed when we walked in but the wait wasn\'t bad. Tom, who took our order, was really helpful! He explained the menu and gave us his recommendations. I got the carne asada burrito and I couldn\'t even finish it! I\'m going to have to make a few trips to try all of the other stuff!',
        useful: 0,
        funny: 0,
        cool: 1
      }
    ]
  },
  // add restaurant Jupiter Cafe
  jupitercafe: {
		reference: 'jupitercafe',
    name: 'Jupiter Cafe',
    number: '714-112-2482',
    address: ['23 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['6:00 am - 2:00 pm'],
      tuesday: ['6:00 am - 2:00 pm'],
      wednesday: ['6:00 am - 2:00 pm'],
      thursday: ['6:00 am - 2:00 pm'],
      friday: ['6:00 am - 2:00 pm'],
      saturday: ['Closed'],
      sunday: ['Closed']
    },
    good: 'lunch, brunch, burritos',
    tags: ['jupiter','cafe','lunch','burritos','burrito','food'],
    images: ['images/jupitercafe/img001.jpg','images/jupitercafe/img002.jpg','images/jupitercafe/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Salty Chicken',
        date: '1/13/2016',
				rating: 4,
        review: 'Yo, the breakfast burritos here are the size of your head! I\'d trade my first-born for a burrito and a cherry coke any day. ANY.',
        useful: 0,
        funny: 1,
        cool: 0
      },
      {
        username: 'Andy Min',
        date: '2/2/2016',
				rating: 4,
        review: 'The reviewer below me is an idiot. How are you gonna go and eat a tray of hash browns on a low carb diet. Seriously though, get the breakfast burrito. It can be your breakfast, lunch and dinner.',
        useful: 1,
        funny: 4,
        cool: 0
      },
      {
        username: 'Paleo Princess',
        date: '2/27/2016',
				rating: 3,
        review: 'If you order the burrito without the tortilla, they\'ll put everything in a big to-go box for you breakfast platter style. Good if you\'re low carbing.',
        useful: 2,
        funny: 0,
        cool: 0
      }
    ]
  },
	// add restaurant Burger Bar
  burgerbar: {
		reference: 'burgerbar',
    name: 'Burger Bar',
    number: '714-712-2235',
    address: ['2223 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['10:00 am - 2:00 pm'],
      tuesday: ['10:00 am - 2:00 pm'],
      wednesday: ['10:00 am - 2:00 pm'],
      thursday: ['10:00 am - 11:00 pm'],
      friday: ['10:00 am - 11:00 pm'],
      saturday: ['10:00 am - 2:00 pm'],
      sunday: ['10:00 am - 2:00 pm']
    },
    good: 'lunch, burgers',
    tags: ['burger','bar','lunch','dinner','burgers','food'],
    images: ['images/burgerbar/img001.jpg','images/burgerbar/img002.jpg','images/burgerbar/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Get Money Eat Bacon',
        date: '1/26/2016',
				rating: 5,
        review: 'Pastrami burger, add fried egg, add avocado. You\'re welcome.',
        useful: 0,
        funny: 2,
        cool: 6
      },
      {
        username: 'Matt B',
        date: '2/16/2016',
				rating: 5,
        review: 'The pastrami burger is ridiculous. If that\'s too much, get a classic burger. It comes with avocado, bacon and cheese. Seriously, if this isn\'t the best burger you\'ve ever had, go back to Average Burgers.',
        useful: 3,
        funny: 3,
        cool: 3
      },
      {
        username: 'Janet M',
        date: '2/27/2016',
				rating: 4,
        review: 'Forget the burgers, get the greek fries. Double fried and topped with a HEFTY amount of gyro, some kinda cheese, onions and tomatoes. Best fries ever.',
        useful: 0,
        funny: 3,
        cool: 0
      }
    ]
  },
	// add restaurant Average Burgers
  averageburgers: {
		reference: 'averageburgers',
    name: 'Average Burgers',
    number: '714-732-0033',
    address: ['1736 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['10:00 am - 4:00 pm'],
      tuesday: ['10:00 am - 4:00 pm'],
      wednesday: ['10:00 am - 4:00 pm'],
      thursday: ['10:00 am - 4:00 pm'],
      friday: ['10:00 am - 4:00 pm'],
      saturday: ['10:00 am - 4:00 pm'],
      sunday: ['Closed']
    },
    good: 'lunch, burgers',
    tags: ['average','burgers','lunch','burger','food'],
    images: ['images/averageburgers/img001.jpg','images/averageburgers/img002.jpg','images/averageburgers/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Rose',
        date: '1/18/2016',
				rating: 1,
        review: 'They really live up to their name. Go to Pete\'s down the street. They make much better burgers.',
        useful: 5,
        funny: 0,
        cool: 0
      },
      {
        username: 'Joe Crusher',
        date: '1/27/2016',
				rating: 2,
        review: 'Cheap and fast. Not the best but sometimes... you just want an average burger.',
        useful: 0,
        funny: 1,
        cool: 0
      },
      {
        username: 'Princess',
        date: '2/12/2016',
				rating: 4,
        review: 'So my boyfriend of ten years took me here for our anniversary. I was skeptical at first, but after walking in and being greeted by the acne-faced boy at the counter, all of my worries were laid to rest. My boyfriend got the special "Average Burger" and I just got a cheeseburger. I wanted the "Average Burger" too but my boyfriend said it\'d be better if we got different things so we would have more variety. The food was okay but the service was top-notch. They gave us table markers and brought the food to our table as soon as it was prepared. I think we\'ll come back again for special occasions.',
        useful: 1,
        funny: 0,
        cool: 0
      }
    ]
  },
	// add restaurant County
  county: {
		reference: 'county',
    name: 'County',
    number: '714-723-1123',
    address: ['736 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['5:00 pm - 11:00 pm'],
      tuesday: ['5:00 pm - 11:00 pm'],
      wednesday: ['5:00 pm - 11:00 pm'],
      thursday: ['5:00 pm - 11:00 pm'],
      friday: ['5:00 pm - 11:00 pm'],
      saturday: ['10:00 am - 11:00 pm'],
      sunday: ['10:00 am - 11:00 pm']
    },
    good: 'dinner, modern, upscale',
    tags: ['county','lunch','dinner','food'],
    images: ['images/county/img001.jpg','images/county/img002.jpg','images/county/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'codeMonkey',
        date: '1/18/2016',
				rating: 5,
        review: 'Fantastic food. Get the chicken and waffles. You won\'t regret it! Crunchy on the outside and fluffy in the middle. Chicken is well seasoned and moist. Guy below me is on crack.',
        useful: 0,
        funny: 5,
        cool: 1
      },
      {
        username: 'i luv buffets',
        date: '2/14/2016',
				rating: 2,
        review: 'I guess this is the new thing. Charge an arm and a leg for a plate with a tiny piece of meat, some sauce puddles and a few sprigs of crap I think they found in some guy\'s backyard. Sorry but I\'m sticking to Hometown Buffet.',
        useful: 0,
        funny: 1,
        cool: 0
      },
      {
        username: 'I thought this was Tinder',
        date: '2/23/2016',
				rating: 4,
        review: 'They just opened but I think they\'re here to stay. Had dinner with the family. Service was good, entrees came out on time, and most importantly, food was fantastic.',
        useful: 1,
        funny: 3,
        cool: 1
      }
    ]
  },
	// add restaurant Stone and Marble
  stoneandmarble: {
		reference: 'stoneandmarble',
    name: 'Stone and Marble',
    number: '714-591-1134',
    address: ['93 Some Street','Irvine','CA','92780'],
    hours: {
      monday: ['Closed'],
      tuesday: ['5:00 pm - 12:00 am'],
      wednesday: ['5:00 pm - 12:00 am'],
      thursday: ['5:00 pm - 12:00 am'],
      friday: ['5:00 pm - 12:00 am'],
      saturday: ['5:00 pm - 12:00 am'],
      sunday: ['5:00 pm - 12:00 am']
    },
    good: 'dinner, steak, modern, upscale',
    tags: ['stone','marble','dinner','steaks','steak','food'],
    images: ['images/stoneandmarble/img001.jpg','images/stoneandmarble/img002.jpg','images/stoneandmarble/img003.jpg'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    reviews: [
      {
        username: 'Adam L',
        date: '1/11/2016',
				rating: 5,
        review: 'Fine dining at it\'s best. Elegant yet inviting - never pretentious. Impeccable service and incomparable food. We opted for the wagyu steak (real/imported, $160, 8oz). Tasted like butter, a reflection of how perfectly marbled it was. Make sure you save room for dessert. You won\'t regret it.',
        useful: 2,
        funny: 1,
        cool: 1
      },
      {
        username: 'Joyce Y',
        date: '1/28/2016',
				rating: 4,
        review: 'The decor is nice and homey, slightly pretentious, but not enough to feel intimidated. They bring out all their cuts on a platter to show you difference in marbling. They even let us take a picture with the platter! John got the Japanese wagyu and I got the lamb chops. Instant regret.',
        useful: 4,
        funny: 3,
        cool: 2
      },
      {
        username: 'LadysMan7263',
        date: '2/27/2016',
				rating: 5,
        review: 'THE place to bring a date. They will be impressed with how expensive your steak is.',
        useful: 0,
        funny: 3,
        cool: 0
      }
    ]
  }
};

// variables for populating search results
var queryRef = '';
var queryName = '';
var queryImage = '';
var queryDesc = '';

// convert search input to array
function intoArray(string) {
	return string.toString().split(' ');
}

// loop through each restaurant's tags against search array
// call function populate for all matches
function matchTags(obj, array) {
	var dupe = [];
	// dupe array used to check for duplicate entries (multiple tag matches)
  for (var prop in obj) {
    // loop through each restaurant
    for (var i = 0; i < obj[prop].tags.length; i++) {
      // loop through each restaurant's tags
      for (var j = 0; j < array.length; j++) {
        // loop all search array values against each restaurant tag
        if (obj[prop].tags[i] === array[j]
					&& obj[prop].name !== dupe[dupe.length - 1]) {
					// check to see if tag value === search array value
					// && check if current iteration is the same as the last iteration (duplicate)
					// prevent 'lunch tacos' search returning the same restaurant twice ('tacos' and 'lunch' tag)
					queryRef = obj[prop].reference;
          queryName = obj[prop].name;
          queryImage = obj[prop].images[0];
          queryDesc = obj[prop].description;
          populate(queryRef, queryName, queryImage, queryDesc);
					// push matching restaurant to dupe array before repeating loop
          dupe.push(obj[prop].name);
        }
      }
    }
  }
}

// populate function will create and append media boxes per query result
function populate(reference, name, image, description) {
  var landing = document.getElementById('landing');
	landing.setAttribute('class', 'hidden');

	var newElem = document.createElement('div');
	var parent = document.getElementById('query-list');
	newElem.setAttribute('class', 'media');
	newElem.setAttribute('id', 'rest-box');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('rest-box');
	newElem.setAttribute('class', 'media-left');
	newElem.setAttribute('id', 'rest-thumb');
	parent.appendChild(newElem);

	newElem = document.createElement('a');
	parent = document.getElementById('rest-thumb');
	newElem.setAttribute('id', 'image-link');
	newElem.setAttribute('href', '#');
	parent.appendChild(newElem);

  // add event listener to each search result
  // click to call initRestaurant() for this restaurant
  newElem.addEventListener('click', function(e) {
    sendRef(reference);
    initRestaurant();
  })

	newElem = document.createElement('img');
	parent = document.getElementById('image-link');
	newElem.setAttribute('class', 'media-object');
	newElem.setAttribute('src', image);
	newElem.setAttribute('alt', 'image');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('rest-box');
	newElem.setAttribute('class', 'media-body');
	newElem.setAttribute('id', 'rest-body');
	parent.appendChild(newElem);

	newElem = document.createElement('h4');
	newText = document.createTextNode(name);
	parent = document.getElementById('rest-body');
	newElem.setAttribute('class', 'media-header');
  newElem.className += ' inline';
	newElem.setAttribute('id', 'rest-name');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

  // user can also click on restaurant name
  newElem.addEventListener('click', function(e) {
    sendRef(reference);
    initRestaurant();
  })

  // convert and display ratings to stars
  findStars(reference, 'rest-body');

	newElem = document.createElement('p');
	newText = document.createTextNode(description);
	parent = document.getElementById('rest-body');
	newElem.setAttribute('class', 'description');
	newElem.setAttribute('id', 'rest-desc');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	// remove IDs for next iteration
  document.getElementById('rest-desc').removeAttribute('id');
	document.getElementById('rest-name').removeAttribute('id');
	document.getElementById('rest-body').removeAttribute('id');
	document.getElementById('rest-thumb').removeAttribute('id');
	document.getElementById('rest-box').removeAttribute('id');
	document.getElementById('image-link').removeAttribute('id');
}

// clear current results and/or restaurant content
// remove parent div containers
// create empty query container and restaurant container
function clearPage() {
	var toAnchor = document.getElementById('anchor');
	var toQueryList = document.getElementById('query-list');
  var toRestaurant = document.getElementById('restaurant-content');
	toAnchor.removeChild(toQueryList);
  toAnchor.removeChild(toRestaurant);
	// remove current ontainers, create new containers
	var newElem = document.createElement('div');
	newElem.setAttribute('class', 'col-md-12');
	newElem.setAttribute('id', 'query-list');
	toAnchor.appendChild(newElem);
  newElem = document.createElement('div');
  newElem.setAttribute('class', 'col-md-12');
  newElem.setAttribute('id', 'restaurant-content');
  toAnchor.appendChild(newElem);
}

// clear review section
function clearReviews() {
  // remove list of reviews
  var toReviewBox = document.getElementById('review-box');
  var toList = document.getElementById('review-list');
	toReviewBox.removeChild(toList);
	// create empty container
  var newElem = document.createElement('div');
  newElem.setAttribute('class', 'col-md-9');
  newElem.className += ' float-left';
  newElem.setAttribute('id', 'review-list');
  toReviewBox.appendChild(newElem);
}

// remove form after submitting
// not currently using, leaving code to preserve
function clearForm() {
  var toReviewBox = document.getElementById('review-list');
  var toForm = document.getElementById('review-form');
  toReviewBox.removeChild(toForm);
}

// convert search input into an array by calling function intoArray;
// loop through each restaurant's tags against the search array;
// return any matches and appends them via function populate;
function searchFood() {
	clearPage();
	return matchTags(restaurant, intoArray(searchInput.value.toLowerCase()));
}

// search event listener
var search = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');
search.addEventListener('click', searchFood);

// variables for generating restaurant page
// assign values in initRestaurant(), use in showRestaurant() and showReviews()
var storeRef = '';
var name = '';
var good = '';
var tags = '';
var street = '';
var city = '';
var telephone = '';
var picOne = '';
var picTwo = '';
var picThree = '';
var mon = '';
var tue = '';
var wed = '';
var thu = '';
var fri = '';
var sat = '';
var sunday = '';
var reviewer = '';
var date = '';
var review = '';

// set up restaurant page (info, photos) and create container for reviews
function showRestaurant() {
	var anchor = document.getElementById('anchor');
	var query = document.getElementById('query-list');
	// set query-list to hidden
	query.setAttribute('class', 'hidden');

	// create skeleton for review section
	var newElem = document.createElement('div');
	var parent = document.getElementById('restaurant-content');
	newElem.setAttribute('class', 'media');
	newElem.setAttribute('id', 'rest-header');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('rest-header');
	newElem.setAttribute('class', 'media-body');
	newElem.setAttribute('id', 'rest-heading');
	parent.appendChild(newElem);

	newElem = document.createElement('h4');
	parent = document.getElementById('rest-heading');
  var newText = document.createTextNode(name);
	newElem.setAttribute('class', 'media-heading');
	newElem.setAttribute('id', 'rest-name');
  newElem.appendChild(newText)
	parent.appendChild(newElem);

  // note: making button to write reviews here for now
  findStars (storeRef, 'rest-heading');

	newElem = document.createElement('p');
  newText = document.createTextNode('tags: ');
	newElem.appendChild(newText);
	newText = document.createTextNode(good);
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	newElem = document.createElement('p');
	newText = document.createTextNode(street);
	parent = document.getElementById('rest-heading');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	var newBreak = document.createElement('br');
  newElem.appendChild(newBreak);
	newText = document.createTextNode(city);
	newElem.appendChild(newText);

	newBreak = document.createElement('br');
  newElem.appendChild(newBreak);
	newText = document.createTextNode(telephone);
	newElem.appendChild(newText);

  // note: making button to write reviews here for now
  newElem = document.createElement('button');
  newText = document.createTextNode('Write a Review');
  parent = document.getElementById('rest-heading');
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default';
  newElem.setAttribute('id', 'write-review');
  newElem.appendChild(newText);
  parent.appendChild(newElem);

  // event listener to reveal review form
  var write = document.getElementById('write-review')
  write.addEventListener('click', writeReview);

	newElem = document.createElement('div');
	parent = document.getElementById('rest-header');
	newElem.setAttribute('class', 'media-right');
	newElem.setAttribute('id', 'rest-img');
	parent.appendChild(newElem);

	newElem = document.createElement('a');
	parent = document.getElementById('rest-img');
	newElem.setAttribute('id', 'img-link-one');
	newElem.setAttribute('href', '#');
	parent.appendChild(newElem);

	newElem = document.createElement('img');
	parent = document.getElementById('img-link-one');
	newElem.setAttribute('class', 'media-object');
  newElem.className += ' review-img';
	newElem.setAttribute('id', 'img-one');
	newElem.setAttribute('src', picOne);
	newElem.setAttribute('alt', 'image');
	parent.appendChild(newElem);

	newElem = document.createElement('a');
	parent = document.getElementById('rest-img');
	newElem.setAttribute('id', 'img-link-two');
	newElem.setAttribute('href', '#');
	parent.appendChild(newElem);

	newElem = document.createElement('img');
	parent = document.getElementById('img-link-two');
	newElem.setAttribute('class', 'media-object');
	newElem.className += ' review-img';
	newElem.setAttribute('id', 'img-two');
	newElem.setAttribute('src', picTwo);
	newElem.setAttribute('alt', 'image');
	parent.appendChild(newElem);

	newElem = document.createElement('a');
	parent = document.getElementById('rest-img');
	newElem.setAttribute('id', 'img-link-three');
	newElem.setAttribute('href', '#');
	parent.appendChild(newElem);

	newElem = document.createElement('img');
	parent = document.getElementById('img-link-three');
	newElem.setAttribute('class', 'media-object');
	newElem.className += ' review-img';
	newElem.setAttribute('id', 'img-three');
	newElem.setAttribute('src', picThree);
	newElem.setAttribute('alt', 'image');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('restaurant-content');
	newElem.setAttribute('class', 'reviews');
	newElem.setAttribute('id', 'review-box');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('review-box');
	newElem.setAttribute('class', 'col-md-3');
  newElem.className += ' float-right';
	newElem.setAttribute('id', 'hours-box');
	parent.appendChild(newElem);

	newElem = document.createElement('p');
	parent = document.getElementById('hours-box');
  newText = document.createTextNode('Mon: ')
	newElem.appendChild(newText);
	newText = document.createTextNode(mon);
  newElem.appendChild(newText);
	newElem.setAttribute('id', 'monday');
	parent.appendChild(newElem);

	newElem = document.createElement('p');
  newText = document.createTextNode('Tue: ')
  newElem.appendChild(newText);
	newText = document.createTextNode(tue);
	newElem.appendChild(newText);
	newElem.setAttribute('id', 'tuesday');
	parent.appendChild(newElem);

	newElem = document.createElement('p');
  newText = document.createTextNode('Wed: ')
  newElem.appendChild(newText);
	newText = document.createTextNode(wed);
	newElem.appendChild(newText);
	newElem.setAttribute('id', 'wednesday');
	parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Thu: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(thu);
  newElem.appendChild(newText);
  newElem.setAttribute('id', 'thursday');
  parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Fri: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(fri);
  newElem.appendChild(newText);
  newElem.setAttribute('id', 'friday');
  parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Sat: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(sat);
  newElem.appendChild(newText);
  newElem.setAttribute('id', 'saturday');
  parent.appendChild(newElem);

  newElem = document.createElement('p');
  newText = document.createTextNode('Sun: ')
  newElem.appendChild(newText);
  newText = document.createTextNode(sunday);
  newElem.appendChild(newText);
  newElem.setAttribute('id', 'Sunday');
  parent.appendChild(newElem);

  newElem = document.createElement('div');
  parent = document.getElementById('review-box');
  newElem.setAttribute('class', 'col-md-9');
  newElem.className += ' float-left';
  newElem.setAttribute('id', 'review-list');
  parent.appendChild(newElem);
}

// loop function for every entry in object review
// create separate div container for each review
function showReviews(reviewer, date, review) {
	var newElem = document.createElement('div');
	var parent = document.getElementById('review-list');
	newElem.setAttribute('class', 'row');
	newElem.setAttribute('id', 'review-row');
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('review-row');
	newElem.setAttribute('class', 'col-md-3');
	newElem.setAttribute('id', 'reviewer');
	parent.appendChild(newElem);

	newElem = document.createElement('p');
	var newText = document.createTextNode(reviewer);
	parent = document.getElementById('reviewer');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	newElem = document.createElement('p');
	newText = document.createTextNode(date);
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	newElem = document.createElement('div');
	parent = document.getElementById('review-row');
	newElem.setAttribute('class', 'col-md-9');
	newElem.setAttribute('id', 'review-col');
	parent.appendChild(newElem);

	newElem = document.createElement('p');
	newText = document.createTextNode(review);
	parent = document.getElementById('review-col');
	newElem.appendChild(newText);
	parent.appendChild(newElem);

	// remove IDs for next iteration
	document.getElementById('review-row').removeAttribute('id');
	document.getElementById('reviewer').removeAttribute('id');
	document.getElementById('review-col').removeAttribute('id');
}

// store reference ID to be used in initRestaurant()
function sendRef(reference) {
  storeRef = reference;
}

// match variable storeRef to unique restaurant
// call showRestaurant() and showReviews()
function initRestaurant() {
  clearPage();
	for (var prop in restaurant) {
		// loop through each restaurant
		if (restaurant[prop].reference === storeRef) {
			// match reference from search result
      // pass matching restaurant details to variables
      name = restaurant[prop].name;
      good = restaurant[prop].good;
      street = restaurant[prop].address[0];
      city = restaurant[prop].address[1] + ', ' + restaurant[prop].address[2] + ' ' + restaurant[prop].address[3];
      telephone = restaurant[prop].number;
      picOne = restaurant[prop].images[0];
      picTwo = restaurant[prop].images[1];
      picThree = restaurant[prop].images[2];
      // join hours for restaurants that close between lunch and dinner
      mon = restaurant[prop].hours.monday.join(', ');
      tue = restaurant[prop].hours.tuesday.join(', ');
      wed = restaurant[prop].hours.wednesday.join(', ');
      thu = restaurant[prop].hours.thursday.join(', ');
      fri = restaurant[prop].hours.friday.join(', ');
      sat = restaurant[prop].hours.saturday.join(', ');
      sunday = restaurant[prop].hours.sunday.join(', ');
      // set up restaurant html structure
      showRestaurant();
      // loop through reviews backwards to show most recent reviews first
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        reviewer = restaurant[prop].reviews[i].username;
        date = restaurant[prop].reviews[i].date;
        review = restaurant[prop].reviews[i].review;
        // call showReviews() for each review
        showReviews(reviewer, date, review);
      }
		}
	}
}

// variables for passing current date to review array
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

// create review form when corresponding button is clicked
function writeReview() {
  clearReviews();
  var toList = document.getElementById('review-list');
  var newElem = document.createElement('div');
  newElem.setAttribute('class', 'col-md-12');
  newElem.className += ' form-box float-left';
  newElem.setAttribute('id', 'review-form');
  toList.appendChild(newElem);

  var toForm = document.getElementById('review-form');
  newElem = document.createElement('div');
  newElem.setAttribute('class', 'form-group');
  newElem.setAttribute('id', 'form-container');
  toForm.appendChild(newElem);

  var toContainer = document.getElementById('form-container');
  newElem = document.createElement('label');
  var newText = document.createTextNode('Name');
  newElem.setAttribute('for', 'username');
  newElem.appendChild(newText);
  toContainer.appendChild(newElem);

  newElem = document.createElement('input');
  newElem.setAttribute('type', 'text');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'username');
  toContainer.appendChild(newElem);

  newElem = document.createElement('label');
  newText = document.createTextNode('Rating');
  newElem.setAttribute('for', 'rating');
  newElem.appendChild(newText);
  toContainer.appendChild(newElem);

  newElem = document.createElement('br');
  toContainer.appendChild(newElem);
  // add star icons
  newElem = document.createElement('span');
  newElem.setAttribute('id', 'rating');
  toContainer.appendChild(newElem);
  // star 1
  newElem = document.createElement('i');
  parent = document.getElementById('rating');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 1);
  parent.appendChild(newElem);
  // star 2
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 2);
  parent.appendChild(newElem);
  // star 3
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 3);
  parent.appendChild(newElem);
  // star 4
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 4);
  parent.appendChild(newElem);
  // star 5
  newElem = document.createElement('i');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-o fa-3x';
  newElem.setAttribute('data-count', 5);
  parent.appendChild(newElem);

  newElem = document.createElement('br');
  toContainer.appendChild(newElem);

  stars = document.querySelectorAll('[data-count]');
  allstars = document.getElementById('rating');
  shiftStar();

  newElem = document.createElement('label');
  newText = document.createTextNode('Review');
  newElem.setAttribute('for', 'review');
  newElem.appendChild(newText);
  toContainer.appendChild(newElem);

  newElem = document.createElement('textarea');
  newElem.setAttribute('class', 'form-control');
  newElem.setAttribute('id', 'review');
  newElem.setAttribute('rows', '10');
  toContainer.appendChild(newElem);

  newElem = document.createElement('button');
  newText = document.createTextNode('Submit');
  newElem.setAttribute('type', 'submit');
  newElem.setAttribute('class', 'btn');
  newElem.className += ' btn-default';
  newElem.setAttribute('id' ,'submit-button');
  newElem.appendChild(newText);
  toContainer.appendChild(newElem);

  // event listener to push review
  var submit = document.getElementById('submit-button');
  submit.addEventListener('click', submitReview);
}

// clear review form after pushing to review array
// create updated list of reviews
function updateReviews() {
  clearPage();
  for (var prop in restaurant) {
    // loop through each restaurant
    if (restaurant[prop].reference === storeRef) {
      // match reference from search result
      // loop through reviews backwards to show most recent reviews first
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        reviewer = restaurant[prop].reviews[i].username;
        date = restaurant[prop].reviews[i].date;
        review = restaurant[prop].reviews[i].review;
        // call showReviews() for each review
        initRestaurant();
      }
    }
  }
}

// push new review object into review array
function submitReview() {
  // pull values from review form and assign to variables
  var newReview = {};
  var addReviewer = document.getElementById('username');
  var addReview = document.getElementById('review');
  newReview.username = addReviewer.value;
  newReview.date = month + '/' + day + '/' + year;
  newReview.rating = parseInt(saveFill);
  newReview.review = addReview.value;
  // match reference (assigned when clicking on restaurant)
  // push new review into targeted restaurant's review array
  for (var prop in restaurant) {
    if (restaurant[prop].reference === storeRef) {
      restaurant[prop].reviews.push(newReview);
    }
  }
  updateReviews();
}

// add star to span id = 'stars'
function giveStar(number) {
  for (var i = 0; i < number; i++){
    var newElem = document.createElement('i');
    var parent = document.getElementById('stars');
    newElem.setAttribute('class', 'fa');
    newElem.className += ' fa-star fa-2x';
    parent.appendChild(newElem);
  }
}

// add half star to span id = 'stars'
function giveHalfStar() {
  var newElem = document.createElement('i');
  var parent = document.getElementById('stars');
  newElem.setAttribute('class', 'fa');
  newElem.className += ' fa-star-half-o fa-2x';
  parent.appendChild(newElem);
}

// add empty star to span id = 'stars'
function giveEmptyStar(number) {
  for (var i = 0; i < number; i++){
    var newElem = document.createElement('i');
    var parent = document.getElementById('stars');
    newElem.setAttribute('class', 'fa');
    newElem.className += ' fa-star-o fa-2x';
    parent.appendChild(newElem);
  }
}

// create star html components
function createStars(stars, half, toId) {
  var count = 5;
  var emptyStar = '';

  // 5 stars total; empty star = count - (stars + half)
  var newElem = document.createElement('span');
  var parent = document.getElementById(toId);
  newElem.setAttribute('id', 'stars');
  parent.appendChild(newElem);

  giveStar(stars);
  // create half star if true, create empty to fill
  if (half === true) {
    giveHalfStar();
    count -= 1;
    emptyStar = count - stars;
    giveEmptyStar(emptyStar);
  } else {
    emptyStar = count - stars;
    giveEmptyStar(emptyStar);
  }
  // removing id for next span
  newElem.removeAttribute('id');
}

// find the average of an array containing numbers
function avgArray(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    // add each array value to sum and divide amount of values
    sum = sum + array[i];
  }
  sum = sum / array.length;
  return sum;
}

// determine how many stars are displayed
function calcStars(rating, toId) {
  var times = ''
  var half = ''
  // times = number of stars, if half = true, give half star
  if (rating > 4.875) {
    times = 5;
  } else if (rating > 4.25) {
    times = 4;
    half = true;
  } else if (rating > 3.875) {
    times = 4;
    half = false;
  } else if (rating > 3.25) {
    times = 3;
    half = true;
  } else if (rating > 2.875) {
    times = 3;
    half = false;
  } else if (rating > 2.25) {
    times = 2;
    half = true;
  } else if (rating > 1.875) {
    times = 2;
    half = false;
  } else if (rating > 1.25) {
    times = 1;
    half = true;
  } else {
    times = 1;
    half = false;
  }
  // console.log for testing, will call another function
  createStars(times, half, toId);
}

// determine how many stars to create for a restaurant
function findStars(name, toId) {
  var ratings = [];
  var average = ''
  for (var prop in restaurant) {
    if (restaurant[prop].reference === name) {
      // determine unique restaurant, push ratings into array
      for (var i = restaurant[prop].reviews.length - 1; i >= 0; i--) {
        ratings.push(restaurant[prop].reviews[i].rating);
      }
    }
  }
  // calculate average of array and quantity of stars
  average = avgArray(ratings);
  console.log(average);
  return calcStars(average, toId);
}

// variables for filling in stars
var stars = '';
var fill = 0;
var saveFill = 0;
var starsClicked = false

// apply event listeners to make stars interactive
function shiftStar() {
  for (i = 0; i < stars.length; i++) {
    stars[i].addEventListener('mouseenter', fillStar);
    stars[i].addEventListener('mouseleave', emptyStar);
    stars[i].addEventListener('click', saveStars);
  }
}

// fill clicked star and all stars before it
function fillStar() {
  fill = this.getAttribute('data-count');
  // determine which star user is hovering over
  for (i = 0; i < fill; i++) {
    // fill only if user has not clicked a rating
    if (!starsClicked) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    }
  }
}

// empty all stars when mouse leaves rating area
function emptyStar() {
  for (i = 0; i < stars.length; i++) {
    // empty only if user has not clicked a rating
    if (!starsClicked) {
      stars[i].classList.remove('fa-star');
      stars[i].classList.add('fa-star-o');
    }
  }
}

// save fill state and save rating value
function saveStars() {
  fill = this.getAttribute('data-count');
  saveFill = fill;
  // save fill state if user has not clicked
  if (!starsClicked) {
    for (i = 0; i < fill; i++) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    }
    starsClicked = true;
    saveFill = fill;
  } else if (starsClicked) {
    // click again to reset/remove saved fill state
    starsClicked = false;
    saveFill = 0;
  }
}
